"use client";

import { useEffect, useState } from "react";

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // 100% 도달 시 콜백 실행
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-black font-dot text-center px-2">
      <h1 className="text-xl mb-6">LOADING...</h1>

      <div>
        <div
          className="h-full bg-green-600"
          style={{ width: `${progress}%`, transition: "width 0.05s" }}
        />
      </div>

      <p className="text-xl mt-3">{progress}%</p>
    </main>
  );
}
