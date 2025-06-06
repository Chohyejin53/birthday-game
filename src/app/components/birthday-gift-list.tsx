export default function BirthdayGiftList() {
  return (
    <section id="tab1" className="bg-white px-5 py-8">
      <div className="max-w-[375px] mx-auto">
        <h3 className="text-2xl font-bold text-[#023047] text-center pb-5">
          A Gift <br className="block sm:hidden" /> Recommendation List
        </h3>
        <p className="text-[12px] text-[#666] mb-4">
          내가 그동안 너에게 뭐가 필요할지 고민했던 선물들 중 일부를 가져왔어.
          이제 군말없이 선물들을 소개할게.
        </p>

        <ul className="space-y-4">
          <li className="bg-[#d8f3dc] p-5 rounded-[15px]">
            <h4 className="relative text-[20px] font-bold text-[#333] mb-4 text-center before:content-['🎁'] before:absolute before:left-0 after:content-['🎁'] after:absolute after:right-0">
              ILLY Coffee Machine
            </h4>
            <p className="text-[11px] text-left text-[#666] mb-3">
              일리커피머신기는 나도 알고는 있었지만, 너가 소개해줘서 더 관심있게
              보던 머신기였던 것 같아. 아무래도 집안에 있는것보다 집 밖에 있는걸
              더 좋아하는 너지만, 밤늦게 공부를 하고 자거나 혹은 아침 일찍 눈을
              떠야하는 너에게 어쩌면 필요할지도 모르겠다고 생각이 들어서 제일
              먼저 소개해 보아. 블루투스와 조명으로 무드를 더하고 홈카페
              즐기기엔 최고가 아닐까?
            </p>
            <div className="w-full h-[166px] hidden sm:block">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/d3xULUxGVnY?autoplay=1&mute=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full h-[135px] block sm:hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/d3xULUxGVnY?autoplay=1&mute=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="http://www.10x10.co.kr/shopping/category_prd.asp?itemid=2255061&disp=112115101&pRtr=일리+커피머신&rc=rpos_1_6"
              target="_blank"
              className="block w-full mt-4 py-2 rounded-full text-white text-center bg-[#007f5f]"
            >
              <span className="relative pr-7 text-lg">
                Detail View
                <span className="absolute top-0 right-0">🔍</span>
              </span>
            </a>
          </li>

          {/* 🎁 더 많은 리스트는 여기 아래에 map으로 구성 가능 */}
        </ul>
      </div>
    </section>
  );
}
