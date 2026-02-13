# 🌌 Star Wars Planets Explorer

A Star Wars-themed web application that fetches and displays planet information from the Star Wars universe using the SWAPI (Star Wars API). Explore all planets with their climate, terrain, and population data in an immersive sci-fi interface.

## Features

- 🚀 **Fetch All Planets**: Load complete data from the SWAPI with automatic pagination handling
- 🎨 **Star Wars Themed UI**: Dark space background with signature Star Wars yellow accent colors
- 📱 **Responsive Grid Layout**: Auto-adjusting card grid that works on all screen sizes
- ⚡ **Fast & Efficient**: Uses ES6 modules and async/await for clean, modern JavaScript
- 🔄 **Interactive Buttons**: Hover effects with glowing animations inspired by sci-fi aesthetics
- 📊 **Detailed Planet Info**: Display climate, terrain, and population for each planet

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **API**: [SWAPI (Star Wars API)](https://swapi.dev/) - Free public API with no authentication required
- **Styling**: Custom CSS with radial gradients and hover animations

## Project Structure

```
├── index.html          # Main HTML file with page structure
├── main.js            # Entry point - handles button click events
├── api.js             # API calls to SWAPI with pagination
├── dom.js             # DOM manipulation and planet rendering
├── style.css          # Star Wars themed styling
└── README.md          # Project documentation
```

## How to Use

1. **Open the application** - Simply open `index.html` in your web browser
2. **Click "Cargar Planetas"** - The button will fetch all planets from SWAPI
3. **View planet details** - Planets are displayed in cards showing:
   - Planet name
   - Climate information
   - Terrain type
   - Population

## Getting Started

No installation required! This is a static website that works in any modern browser.

```bash
# Simply open in your browser (or use a local server)
open index.html

# Or use a local server (Python)
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

## API Integration

The app uses the free **SWAPI (Star Wars API)** available at `https://swapi.dev/api/`

- **Endpoint**: `/planets/` 
- **Features**: Automatic pagination handling (10 planets per page)
- **No authentication** needed

## Code Highlights

### API Fetching (`api.js`)
Handles pagination automatically to fetch all planets from multiple pages:
```javascript
while (url) {
    const response = await fetch(url);
    const data = await response.json();
    planets = [...planets, ...data.results];
    url = data.next; // Move to next page
}
```

### DOM Rendering (`dom.js`)
Renders planets as styled cards with all relevant information.

### Event Handling (`main.js`)
Manages button interactions with loading states and user feedback.

## Browser Support

Works on all modern browsers that support:
- ES6 Modules
- Fetch API
- CSS Grid
- CSS Gradients

## Future Enhancements

- Add search/filter functionality
- Sort planets by population, climate, etc.
- Show residents (when available from API)
- Add planet details modal
- Save favorites to localStorage

## License

Free to use and modify for educational purposes.

---

**May the Force be with you!** ⭐