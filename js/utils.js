/**
 * Utility functions for clipboard operations and UI updates
 */

/**
 * Copies text to clipboard using modern API with fallback
 * @param {string} text - The text to copy
 * @returns {Promise<void>}
 */
function copyToClipboard(text) {
    return new Promise((resolve, reject) => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text)
                .then(() => resolve())
                .catch(err => reject(err));
        } else {
            fallbackCopyTextToClipboard(text)
                .then(() => resolve())
                .catch(err => reject(err));
        }
    });
}

/**
 * Fallback method for copying text to clipboard
 * @param {string} text - The text to copy
 * @returns {Promise<void>}
 */
function fallbackCopyTextToClipboard(text) {
    return new Promise((resolve, reject) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            if (successful) {
                resolve();
            } else {
                reject(new Error('Copy command failed'));
            }
        } catch (err) {
            document.body.removeChild(textArea);
            reject(err);
        }
    });
}

/**
 * Shows a simple alert message
 * @param {string} message - The message to display
 */
function showMessage(message) {
    alert(message);
}

// Make globally available
window.copyToClipboard = copyToClipboard;
window.fallbackCopyTextToClipboard = fallbackCopyTextToClipboard;
window.showMessage = showMessage;
