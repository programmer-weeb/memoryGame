export function SingleCard({ sticker, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border-2 border-transparent hover:border-blue-500 rounded-xl p-3 shadow-md hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="aspect-square overflow-hidden rounded-lg mb-2">
        <img
          src={sticker.images.fixed_height.url}
          alt={sticker.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-xs text-gray-500 truncate text-center">
        {sticker.title || "Giphy Sticker"}
      </p>
    </div>
  );
}
