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
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (stickers.length > 0) {
      setShuffledStickers(shuffleArray([...stickers]));
    }
  }, [stickers]);

  const handleCardClick = (id) => {
    if (isGameOver) return;

    if (clickedIds.has(id)) {
      setIsGameOver(true);
      if (score > bestScore) setBestScore(score);
    } else {
      const newClickedIds = new Set(clickedIds).add(id);
      setClickedIds(newClickedIds);
      const newScore = newClickedIds.size;
      setScore(newScore);

      if (newScore === stickers.length) {
        setIsGameOver(true);
        setBestScore(stickers.length);
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
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-panel p-8 text-red-400 font-medium">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-6xl">
      {/* Score Board */}
      <div className="glass-panel px-8 py-4 mb-12 flex gap-12 items-center">
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Current Score</span>
          <span className="text-3xl font-black text-blue-400">{score}</span>
        </div>
        <div className="w-px h-8 bg-white/10"></div>
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Best Score</span>
          <span className="text-3xl font-black text-purple-400">{bestScore}</span>
        </div>
      </div>

      {/* Game Over Modal */}
      {isGameOver && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-panel max-w-md w-full p-10 text-center scale-in-center">
            <h2 className={`text-4xl font-black mb-2 ${score === stickers.length ? "text-green-400" : "text-red-400"}`}>
              {score === stickers.length ? "UNSTOPPABLE!" : "GAME OVER"}
            </h2>
            <p className="text-slate-400 mb-8">
              {score === stickers.length 
                ? "You've mastered the memory grid." 
                : `You managed to collect ${score} stickers. Try again?`}
            </p>
            <button
              onClick={resetGame}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all active:scale-95"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full p-4">
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
