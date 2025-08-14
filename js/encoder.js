// Emoji encoding constants
const ENCODING_TYPES = {
    binary: { zero: '⚫', one: '⚪' },
    dots: { zero: '🔴', one: '🔵' },
    hearts: { zero: '🤍', one: '❤️' }
};

/**
 * Encodes a secret message into emoji format using binary representation
 * @param {string} secret_data - The text message to encode
 * @param {string} encodingType - The type of emoji encoding to use
 * @returns {string} - The emoji-encoded message
 */
function encode_to_emojis(secret_data, encodingType = 'binary') {
    if (!secret_data) return '';
    
    const { zero, one } = ENCODING_TYPES[encodingType];
    let binary_secret = '';
    for (let i = 0; i < secret_data.length; i++) {
        binary_secret += secret_data[i].charCodeAt(0).toString(2).padStart(8, '0');
    }

    let result = '';
    for (let i = 0; i < binary_secret.length; i++) {
        result += binary_secret[i] === '1' ? one : zero;
    }
    return result;
}

// Make globally available
window.encode_to_emojis = encode_to_emojis;
window.ENCODING_TYPES = ENCODING_TYPES;
