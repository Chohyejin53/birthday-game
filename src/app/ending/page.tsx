"use client";

import { useState } from "react";
import Loading from "../components/loading";

export default function EndingPage() {
  const [done, setDone] = useState(false);

  return (
    <main className="h-screen w-full bg-black text-green-400 font-dot text-center flex items-center justify-center px-4">
      {!done ? (
        <Loading
          onComplete={() => {
            setDone(true);
          }}
        />
      ) : (
        <div className="animate-fade-in max-w-md space-y-6 text-sm leading-relaxed">
          <h3 className="text-lg text-green-400 mb-3">
            너를 위해 준비한 건 여기까지 ♪
            <u className="block text-xs text-gray-400 mt-1">
              마지막까지 봐줘서 고마워!
            </u>
          </h3>

          <p className="text-xs text-green-300 pt-4 mt-4">
            다시 한번 생일축하하고 <br />
            행복한 2025년 06월 06일이 됐으면 좋겠어 :)
            <br />
            나와 친구로 오래오래 함께해줘서 너무너무 고마워~!
          </p>

          <div className="pt-4 text-xs text-gray-400">
            🎂 <strong>HAPPY BIRTHDAY YEJIN</strong> 🎂
          </div>
        </div>
      )}
    </main>
  );
}
