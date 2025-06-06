"use client";

import { useState } from "react";

import BirthdayIntro from "../components/birthday-intro";
import BirthdayInfo from "../components/birthday-info";
import BirthdayGiftList from "../components/birthday-gift-list";
import EndingPage from "../ending/page";

export default function BirthdayPage() {
  const [isEnding, setIsEnding] = useState(false);

  const handleSmsClick = () => {
    setIsEnding(true); // 버튼 클릭 시 ending 페이지로 전환
  };

  if (isEnding) {
    return <EndingPage />; // EndingPage 내부에서 자체 상태로 로딩 → 메시지 표시
  }

  return (
    <div className="min-w-[320px] relative">
      <div className="relative">
        <BirthdayIntro />
        <BirthdayInfo />
        <BirthdayGiftList />
        <div className="px-5 py-10 text-center">
          <button
            onClick={handleSmsClick}
            className="block bg-white shadow-md text-[#007f5f] font-bold text-[16px] py-2 px-4 rounded-[15px] relative"
          >
            선물 고르고 문자보내기
          </button>
        </div>
      </div>
    </div>
  );
}
