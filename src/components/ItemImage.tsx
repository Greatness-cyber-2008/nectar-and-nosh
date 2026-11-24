"use client";
import { useState } from "react";

export function ItemImage({
  id,
  emoji,
  name,
  className = "h-24 w-24 object-contain",
}: {
  id: string;
  emoji: string;
  name: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="text-4xl leading-none">{emoji}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/menu/${id}.png`}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
