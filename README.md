# 🌸 Perfume Finder

A modern, elegant perfume recommendation website built with React and inspired by Kyoto aesthetics. This frontend-only application helps users discover perfumes based on their preferences through an intuitive filtering system.

![Perfume Finder Screenshot](/api/placeholder/800/400)

## ✨ Features

- 🎨 **Elegant Kyoto-Inspired Design**: Clean UI with soft colors and minimalist Japanese aesthetics
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🌓 **Dark/Light Mode**: Toggle between themes for comfortable viewing
- ⚡ **Dynamic Filtering System**: Filter perfumes by:
  - Scent type (Floral, Woody, Fresh, Oriental)
  - Season
  - Intensity
  - Price range
  - Trending status
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 💫 **Interactive UI Elements**: Real-time updates and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/perfume-finder.git
cd perfume-finder
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

## 🛠️ Built With

- **[React](https://reactjs.org/)** - UI Framework
- **[Vite](https://vitejs.dev/)** - Build Tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[Lucide React](https://lucide.dev/)** - Icons

## 📂 Project Structure

```
perfume-finder/
├── src/
│   ├── components/
│   │   └── PerfumeFinder.jsx    # Main component
│   ├── App.jsx                  # Root component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── public/                     # Static assets
└── ...config files
```

## 🎨 Customization

### Adding New Perfumes

Add new perfumes to the `perfumeData` array in `PerfumeFinder.jsx`:

```javascript
const perfumeData = [
  {
    id: 6, // Increment ID
    name: "Your New Perfume",
    type: "Floral", // Choose from existing types
    description: "Your description",
    season: "Spring", // Choose from seasons
    image: "/path/to/image",
    price: 125,
    notes: ["Note 1", "Note 2", "Note 3"],
    intensity: "Medium", // Light, Medium, or Strong
    trending: false,
  },
  // ... existing perfumes
];
```

### Modifying Filter Options

Customize filter options by updating the respective arrays:

```javascript
const scentTypes = ["All", "Floral", "Woody", "Fresh", "Oriental"];
const seasons = ["All", "Spring", "Summer", "Autumn", "Winter"];
const intensities = ["All", "Light", "Medium", "Strong"];
```

## 📱 Responsive Breakpoints

The application uses Tailwind's default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Inspired by Kyoto's traditional aesthetics
- Icons provided by [Lucide](https://lucide.dev/)
- Placeholder images via API

---

Made with ❤️ by Makiko and Irving
