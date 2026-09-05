# Object Styler

A React + Vite playground for live-customizing an on-screen object's style — border width, border style, shape, size, and color — using React Context for state management and Tailwind CSS for styling.

> ⚠️ **Work in progress.** This project is still being built out. Expect missing features, rough edges, and breaking changes.

## Features

- 🎨 Live style controls (border width, border style, color, size) that update a rendered object in real time
- 🧠 Centralized state via a custom `ObjectContext` + `useObject()` hook — no prop drilling
- ⚡ Built with Vite for fast dev/build times
- 💨 Styled with Tailwind CSS

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (or your package manager of choice)

### Installation

```bash
git https://github.com/Rohamlikescoding/change-style.git
cd change-style
npm install
```

### Running locally

```bash
npm run dev
```

The app will be available at the local address Vite prints in your terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── contexts/
│   └── ObjectContext.jsx   # Global style state (Context API)
├── components/
│   ├── ComponentObject.jsx # Renders the styled object
│   └── BorderWidth.jsx     # Example control for editing state
│   └── BorderStyleList.jsx # List of Border style related components in ui
│   └── Button.jsx # styled button element
├── App.jsx
└── main.jsx                # App entry point, wraps app in ObjectProvider
```

## How It Works

All object styles (shape, size, border, color, etc.) live in a single `ObjectProvider` at the top of the app. Any component wrapped by the provider can read _and update_ that shared state via the `useObject()` hook:

```jsx
const { style, setStyle } = useObject();
```

This keeps controls (like border-width inputs) and the rendered object in sync without passing props down manually.

## Roadmap

- [ ] More style controls (shape picker, size sliders, color picker)
- [ ] Safelist / arbitrary-value handling for dynamic Tailwind classes
- [ ] Persist styles (localStorage or export/import)
- [ ] Polish UI/UX

## Contributing

This is an early-stage personal project — issues and suggestions are welcome, but expect frequent changes.
