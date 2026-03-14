# Quran Memorization App - 4 Page Mushaf

Memorize the Holy Quran with a fixed 4-page spread. Audio-synced verse highlighting and training modes support repetition, visual memory, and active recall.

## Features

- **4-Page Display** - Shows 4 Mushaf pages simultaneously for visual memorization
- **All 604 Pages** - Complete Quran coverage (151 sheets)
- **Multiple Reciters** - Mishary Alafasy, Mahmoud Al-Husary, Minshawi, Abdurrahmaan As-Sudais
- **Training Modes**:
  - Continuous - Play verses continuously
  - Pause after verse - Pause for repetition
  - Hidden words - Test memorization
  - Audio cut-off - Complete from memory
- **Repeat Control** - 5 times, 10 times, or infinite
- **Keyboard Shortcuts**:
  - Space: Play/Pause
  - Left Arrow: Previous verse
  - Right Arrow: Next verse

## Setup

### 1. Add Mushaf Images

For the full experience, add your Mushaf page images to the `mushaf-images/` folder:

```
mushaf-images/
├── page_1.jpg   (Page 1)
├── page_2.jpg   (Page 2)
├── page_3.jpg   (Page 3)
...
├── page_604.jpg (Page 604)
```

**Recommended:** Use Madinah Mushaf images in JPG format (approximately 400x560px or higher)

### 2. Run the App

Simply open `index.html` in any modern web browser:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

No server required - works locally!

## Usage

1. **Select Sheet** - Use dropdown or prev/next buttons to navigate
2. **Choose Reciter** - Open Settings (⚙️) to select your preferred reciter
3. **Set Mode** - Choose training mode (Continuous, Pause, Hidden Words, Audio Cut-off)
4. **Set Repeat** - Choose how many times to repeat
5. **Play** - Click play button or press Space

## Technical Details

- **Audio Source**: Islamic Network (cdn.islamic.network)
- **Verse Data**: Quran.com API (api.quran.com)
- **No Server Required**: Runs entirely in browser
- **Works Offline**: Caches verse data for offline viewing (audio requires internet)

## File Structure

```
4-Page Quran Memorization App/
├── index.html              # Main application
├── css/style.css          # Styles
├── js/app.js              # Application logic
├── mushaf-images/         # Mushaf page images (add your own)
├── data/                  # Data files
├── README.md              # This file
```

## Troubleshooting

### Audio not playing
- Ensure you have an internet connection
- Try a different reciter
- Check browser audio permissions

### Images not showing
- Verify images are in `mushaf-images/` folder
- Check file names are correct (`page_1.jpg`, etc.)
- Use JPG format

### Slow performance
- Preload all verse text (first load takes time)
- Use a modern browser
- Ensure stable internet connection

## License

Free to use for Quran memorization purposes.
