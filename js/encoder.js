// Emoji encoding constants
const ZERO = '⚫';
const ONE = '⚪';

/**
 * Encodes a secret message into emoji format using binary representation
 * @param {string} secret_data - The text message to encode
 * @returns {string} - The emoji-encoded message
 */
function encode_to_emojis(secret_data) {
    if (!secret_data) return '';
    
    let binary_secret = '';
    for (let i = 0; i < secret_data.length; i++) {
        binary_secret += secret_data[i].charCodeAt(0).toString(2).padStart(8, '0');
    }

    let result = '';
    for (let i = 0; i < binary_secret.length; i++) {
        result += binary_secret[i] === '1' ? ONE : ZERO;
    }
    return result;
}

// Make globally available
window.encode_to_emojis = encode_to_emojis;
