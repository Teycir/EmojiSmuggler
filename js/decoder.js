/**
 * Decodes an emoji-encoded message back to text
 * @param {string} emoji_string - The emoji-encoded message
 * @param {string} encodingType - The type of emoji encoding to use
 * @returns {string} - The decoded text message
 */
function decode_from_emojis(emoji_string, encodingType = 'binary') {
    if (!emoji_string) return '';
    
    const { zero, one } = window.ENCODING_TYPES[encodingType];
    let binary_data = "";
    
    for (let i = 0; i < emoji_string.length; i++) {
        const char = emoji_string[i];
        if (char === one) {
            binary_data += '1';
        } else if (char === zero) {
            binary_data += '0';
        }
    }

    let decodedString = "";
    for (let i = 0; i < binary_data.length; i += 8) {
        const byte = binary_data.slice(i, i + 8);
        if (byte.length === 8) {
            const charCode = parseInt(byte, 2);
            if (charCode > 0 && charCode < 128) { // Basic ASCII validation
                decodedString += String.fromCharCode(charCode);
            }
        }
    }
    return decodedString;
}

// Make globally available
window.decode_from_emojis = decode_from_emojis;
