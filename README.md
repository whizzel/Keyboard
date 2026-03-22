# Interactive Keyboard Application

A modern, interactive keyboard application built with Next.js that allows users to switch between Mac and Windows keyboard layouts with realistic typing experience, haptic feedback, and customizable themes.

## 🎹 Features

### 🍎 Mac Keyboard
- **Authentic Mac Layout**: Complete Mac-style keyboard with Command, Option, and Fn keys
- **Mac-specific Icons**: Brightness, volume, and media control keys with proper icons
- **Realistic Styling**: Mac-inspired design with rounded corners and proper key spacing

### 🪟 Windows Keyboard  
- **Windows Layout**: Standard Windows keyboard arrangement with Ctrl, Alt, and Windows keys
- **Windows Branding**: Official Windows logo on modifier keys
- **Traditional Design**: Classic Windows keyboard styling

### 🎨 Customization
- **6 Beautiful Themes**: Classic, Mint, Royal, Dolch, Sand, and Scarlet color schemes
- **Theme Switcher**: Easy-to-use theme selection interface
- **Consistent Styling**: Themes apply to both Mac and Windows keyboards

### 🎯 Interactive Features
- **Real-time Typing**: Responds to physical keyboard input
- **Visual Feedback**: Keys animate when pressed
- **Sound Effects**: Realistic keyboard typing sounds
- **Haptic Feedback**: Tactile response on supported devices
- **Mouse/Touch Support**: Click or tap keys to interact

### 🔄 Smart Switching
- **Platform Selector**: Toggle between Mac and Windows keyboards
- **Brand Icons**: Official Apple and Windows logos for clear identification
- **Smooth Transitions**: Animated switching between keyboard layouts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd keyboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🛠️ Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Deployment on Vercel
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## 📁 Project Structure

```
keyboard/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main application page
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── ui/
│   │   │   ├── mackeyboard.tsx   # Mac keyboard component
│   │   │   ├── windowskeyboard.tsx # Windows keyboard component
│   │   │   └── button.tsx        # UI button component
│   │   ├── themechoose.tsx       # Theme selector
│   │   └── contact.tsx           # Contact component
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/
│   └── sounds/
│       └── sound.ogg             # Keyboard typing sound
└── README.md
```

## 🎮 Usage

1. **Select Keyboard Type**: Use the Apple/Windows buttons at the top to switch between keyboard layouts
2. **Choose Theme**: Pick your preferred color scheme from the theme selector
3. **Type**: Use your physical keyboard or click/tap the on-screen keys
4. **Experience**: Enjoy realistic typing with sound and haptic feedback

## 🛠️ Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Tabler Icons**: High-quality icon library
- **Web Haptics**: Haptic feedback API
- **React Hooks**: State management and effects

## 🎯 Key Components

### MacKeyboard
- Authentic Mac layout with modifier keys
- Mac-specific function key icons
- Proper key sizing and spacing

### WindowsKeyboard  
- Standard Windows layout
- Windows branding on modifier keys
- Traditional key arrangement

### ThemeChoose
- Interactive theme selector
- Real-time theme switching
- Consistent theming across keyboards

## 🔧 Customization

### Adding New Themes
Edit the keyboard components to add new color schemes in the `KEYBOARD_THEMES` object.

### Modifying Keyboard Layout
Update the `KeyboardLayout` function in either keyboard component to customize key arrangement.

### Sound Customization
Replace `/public/sounds/sound.ogg` with your preferred typing sound file.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tabler Icons](https://tabler-icons.io/) - Beautiful icon library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Web Haptics](https://web-haptics.com/) - Haptic feedback API

---

**Built with ❤️ using Next.js and TypeScript**
# Keyboard
