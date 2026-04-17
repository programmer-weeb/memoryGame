# 🧠 Memory Game - Giphy Edition

A premium, fast-paced memory challenge built with **React 19**, **Tailwind CSS 4**, and the **Giphy API**. Test your memory by clicking each sticker exactly once. One wrong move, and the game is over!

**[🔗 Live Demo](https://memory-game-pkoj2tcyw-programmerweebs-projects.vercel.app/)**

## ✨ Features

- **🎮 Dynamic Gameplay**: Cards reshuffle every time you make a selection
- **🏆 Score Tracking**: Live score updates and persistence of your best record.
- **🖼️ Giphy Integration**: Fetches real-time stickers to ensure every game feels fresh.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **API**: [Giphy SDK](https://developers.giphy.com/)

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/programmer-weeb/memoryGame.git
cd memoryGame
bun install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your Giphy API key:

```env
VITE_GIPHY_API_KEY=your_giphy_api_key_here
```

### 4. Development

Start the development server:

```bash
bun dev
```

## 📂 Project Structure

```text
src/
├── assets/             # Static assets
├── Header.jsx          # App header & branding
├── Cards.jsx           # Main game logic & state management
├── SingleCard.jsx      # Individual card component
├── useGiphyStickers.jsx # Custom hook for API interaction
├── gameUtile.js        # Helper functions (shuffling logic)
└── index.css           # Global styles & Tailwind directives
```
