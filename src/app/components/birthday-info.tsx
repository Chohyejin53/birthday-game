export default function BirthdayInfo() {
  return (
    <section className="relative bg-[#d8f3dc] before:content-[''] before:absolute before:top-[-57px] before:left-0 before:right-0 before:h-[57px] before:bg-[#d8f3dc] z-0">
      <div className="max-w-[375px] min-w-[320px] mx-auto px-5 py-8 relative z-10">
        <p className="mt-4 text-[12px] text-[#666]">
          올해 생일을 앞두고 사실 정말 멋진 생일게임을 개발하려고 했었는데
          말이지, 핑계라고 생각할 수 있지만 정말정말..바빳어...결국 생일 하루
          전날 밤을 꼬박 샜지만 실패해버리고 다시 큐레이션 개발로 넘어오게
          되었지뭐야.. 정말 유감이면서도.. 생일축하 연락도 못하고 만나기전까지
          완성할 수 없을거란 생각에 눈물이 앞을 가린다.
        </p>
        <p className="mt-1 text-[12px] text-[#666]">
          이번 리스트에는 광고는 없어. 거절도 없으니 마음껏 구경하고 골라봐.
        </p>

        <h4 className="mt-8 text-[18px] font-bold text-[#222]">
          마음에드는 선물이 없다면 어떡하지?
        </h4>
        <p className="mt-2 text-[12px] text-[#666] leading-tight">
          <em className="block font-bold italic text-[#007f5f] text-[16px] py-1">
            걱정하지마!
            <br />
            마음에 드는 선물을 찾을 수 있을거야.
          </em>
          그래도 정말정말 혹시라도 마음에드는 선물이 없다면 <br />몇 가지
          선택지를 줄게.
        </p>

        <ul className="mt-4 space-y-4">
          <li className="relative min-h-[60px]">
            <p className="text-[12px] text-[#333]">
              ⏰ 고민하는 너를 위해{" "}
              <em className="text-[#007f5f] font-bold">선물 고민기한</em>을
              늘려줄게^_^
              <br />
              리스트 외에 것이라도 좋아 필요하고 평소 갖고 싶었던 걸 생각해봐.
              <span className="block text-[10px] text-[#777] mt-1">
                기한은 1개월이야!
              </span>
            </p>
          </li>
          <li className="relative min-h-[60px]">
            <p className="text-[12px] text-[#333]">
              💸 그 무엇도 거절하려는 속셈이라면{" "}
              <em className="text-[#007f5f] font-bold">현금 서비스</em>나{" "}
              <em className="text-[#007f5f] font-bold">계좌이체</em>도 가능해.
              <span className="block text-[10px] text-[#777] mt-1">
                그동안 나의 고집을 봐왔다면 선물을 고르는게 나을지도..?
              </span>
            </p>
          </li>
          <li className="relative min-h-[60px]">
            <p className="text-[12px] text-[#333]">
              🐾 모든 선택지가 싫다면{" "}
              <em className="text-[#007f5f] font-bold">너의 친구들을 동원</em>해
              그동안 너가 필요했던 것이 무엇인지 알아내겠어.
              <span className="block text-[10px] text-[#777] mt-1">
                가을이도 예외는 아니야.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
