const FRUITS = ["🍓", "🥭", "🍊", "🍍", "🍉", "🫐"];

export function FloatingFruit() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {FRUITS.map((fruit, i) => (
        <span
          key={i}
          className="absolute text-3xl sm:text-4xl opacity-20 animate-float"
          style={{
            left: `${(i * 17 + 5) % 95}%`,
            top: `${(i * 23 + 8) % 85}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${5 + (i % 3)}s`,
          }}
        >
          {fruit}
        </span>
      ))}
    </div>
  );
}
