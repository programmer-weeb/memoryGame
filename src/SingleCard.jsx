export function SingleCard({ sticker, onClick }) {
  return (
    <div
      onClick={onClick}
      className="glass-card p-4 group cursor-pointer hover:border-blue-500/50 hover:bg-white/10 hover:-translate-y-2 active:scale-95"
    >
      <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-slate-900/50 border border-white/5 relative group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
        <img
          src={sticker.images.fixed_height.url}
          alt={sticker.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 truncate text-center transition-colors">
        {sticker.title || "Giphy Sticker"}
      </p>
    </div>
  );
}
