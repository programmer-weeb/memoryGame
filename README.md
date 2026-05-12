# Memory Game

A small memory game built with React, Tailwind CSS, and the Giphy API. Click each sticker once. If you click the same sticker twice, the round ends.

[Live demo](https://memory-game-seven-rose-52.vercel.app/)

## Features

- Cards reshuffle after each pick.
- The game tracks your current score and best score.
- Stickers come from Giphy, so the deck can change between games.

## Tech stack

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Bun](https://bun.sh/)
- [Giphy SDK](https://developers.giphy.com/)

## Getting started

### Prerequisites

Install [Bun](https://bun.sh/) if you do not already have it.

### Installation

Clone the repo and install the dependencies:

```bash
git clone https://github.com/programmer-weeb/memoryGame.git
cd memoryGame
bun install
```

### Environment setup

Create a `.env` file in the project root and add your Giphy API key:

```env
VITE_GIPHY_API_KEY=your_giphy_api_key_here
```

### Development

Start the dev server:

```bash
bun dev
```

## Project structure

```text
src/
├── assets/             # Static assets
├── Header.jsx          # App header and branding
├── Cards.jsx           # Game logic and state
├── SingleCard.jsx      # Individual card component
├── useGiphyStickers.jsx # Giphy API hook
├── gameUtile.js        # Shuffle helper
└── index.css           # Global styles and Tailwind directives
```
