# Emoji Smuggler

A simple web application that converts text to emoji sequences and back using binary encoding.

## How it works

The application uses two emoji characters to represent binary data:
- ⚫ (black circle) = 0
- ⚪ (white circle) = 1

Each character in your text is converted to its 8-bit binary representation, then each bit is replaced with the corresponding emoji.

## Usage

### Text to Emoji
1. Type or paste your text in the "Text → Emoji" section
2. The emoji sequence appears automatically as you type
3. Click "Copy Emojis" to copy the sequence to your clipboard

### Emoji to Text
1. Paste emoji sequences in the "Emoji → Text" section
2. The decoded text appears automatically
3. Click "Copy Text" to copy the decoded message

## File Structure

```
EmojiSmuggler/
├── index.html          # Main HTML interface
├── js/
│   ├── encoder.js      # Text to emoji encoding functions
│   ├── decoder.js      # Emoji to text decoding functions
│   └── utils.js        # Utility functions (clipboard, etc.)
└── README.md          # This documentation
```

## Technical Details

### Encoding Process
1. Each character is converted to its ASCII/Unicode code point
2. The code point is converted to 8-bit binary
3. Each binary digit (0 or 1) is replaced with ⚫ or ⚪ respectively

### Decoding Process
1. Each emoji is converted back to its binary digit
2. Binary digits are grouped into 8-bit bytes
3. Each byte is converted back to its corresponding character

## Browser Compatibility

- Modern browsers with ES6 support
- Clipboard API support (with fallback for older browsers)
- Responsive design for mobile and desktop

## Examples

| Text | Encoded Emoji |
|------|---------------|
| A | ⚪⚫⚫⚫⚫⚫⚫⚫ |
| Hi | ⚪⚫⚫⚫⚫⚫⚫⚫⚪⚫⚫⚫⚫⚫⚪⚫ |
| Hello | ⚪⚫⚫⚫⚫⚫⚫⚫⚪⚫⚫⚫⚫⚫⚪⚫⚪⚫⚫⚫⚫⚫⚪⚫⚪⚫⚫⚫⚫⚫⚪⚫⚪⚫⚫⚫⚫⚫⚪⚫⚪⚫⚫⚫⚫⚫⚪⚫ |

## Development

Open `index.html` in any modern web browser. No build process or server required.

## License

Open source - feel free to use and modify as needed.
