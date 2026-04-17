import { useState, useEffect } from "react";
import { useGiphyStickers } from "./useGiphyStickers";
import { shuffleArray } from "./gameUtile";
import { SingleCard } from "./SingleCard";

export function Cards() {
  const { stickers, loading, error } = useGiphyStickers({
    limit: 12,
    query: "",
  });

  const [shuffledStickers, setShuffledStickers] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Initialize and shuffle stickers when they are loaded
  useEffect(() => {
    if (stickers.length > 0) {
      setShuffledStickers(shuffleArray([...stickers]));
    }
  }, [stickers]);

  const handleCardClick = (id) => {
    if (isGameOver) return;

    if (clickedIds.has(id)) {
      setIsGameOver(true);
    } else {
      const newClickedIds = new Set(clickedIds).add(id);
      setClickedIds(newClickedIds);
      setScore(newClickedIds.size);

      if (newClickedIds.size === stickers.length) {
        setIsGameOver(true); // User won! (Simplified)
      } else {
        setShuffledStickers(shuffleArray(shuffledStickers));
      }
    }
  };

  const resetGame = () => {
    setClickedIds(new Set());
    setIsGameOver(false);
    setScore(0);
    setShuffledStickers(shuffleArray([...stickers]));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl font-semibold">
        Score: {score} / {stickers.length}
      </div>

      {isGameOver && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              {score === stickers.length ? "🎉 You Won!" : "💀 Game Over"}
            </h2>
            <p className="mb-6 text-gray-600">Final Score: {score}</p>
            <button
              onClick={resetGame}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {shuffledStickers.map((sticker) => (
          <SingleCard
            key={sticker.id}
            sticker={sticker}
            onClick={() => handleCardClick(sticker.id)}
          />
        ))}
      </div>
    </div>
  );
}
