"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
}

export default function StarRating({
  rating = 5,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, index) => (
        <Star
          key={index}
          size={18}
          className="fill-red-500 text-red-500"
        />
      ))}
    </div>
  );
}