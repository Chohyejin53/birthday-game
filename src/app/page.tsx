// src/app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

export default function IntroPage() {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setShowLoading(true); // 로딩 상태로 전환
  };

  if (showLoading) {
    return <Loading onComplete={() => router.push("/contents")} />;
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-black text-white text-center px-4">
      <h1 className="text-xl mb-6">HAPPY BIRTHDAY YEJIN!</h1>

      {showMessage && (
        <>
          <p className="mb-6 text-sm">Are you ready?</p>
          <button
            onClick={handleStart}
            className="bg-white text-black font-dot text-4xl px-10 py-6 border-[6px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:scale-95 transition-all duration-150"
          >
            START
          </button>
        </>
      )}
    </main>
  );
}
