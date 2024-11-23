function Footer() {
  return (
    <div>
        <div className="w-full h-auto bg-black flex justify-center items-center">
  <div className="h-auto w-full max-w-[1340px] py-16 flex flex-col px-4 text-white">
    {/* <!-- Footer Content Wrapper --> */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
      {/* <!-- Section 1 --> */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {/* <!-- Title --> */}
        <div className="text-[24px] text-center md:text-left">모드니펫</div>

        {/* <!-- Description --> */}
        <div className="text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span>대표 000</span>
            <span>|</span>
            <span>사업자번호 000-00-00000</span>
            <span>|</span>
            <span>000</span>
            <span>|</span>
            <span>통신판매번호 0000-0000-0000</span>
            <span>|</span>
            <span>사업자번호조회</span>
          </div>
          {/* <!-- Contact Info --> */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <span>E-mail 00-000-0000</span>
            <span>|</span>
            <span>고객센터 0000-0000</span>
            <span>|</span>
            <span>서울 00구 000길 00. 123호 (00동, 건물이름 1차)</span>
          </div>
          <div className="flex justify-center md:justify-start mt-2">
            Copyright(c) All right Reserved.
          </div>
        </div>

        {/* <!-- Logos --> */}
        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <div className="h-11 w-11 bg-white rounded-full"></div>
          <div className="h-11 w-11 bg-white rounded-full"></div>
          <div className="h-11 w-11 bg-white rounded-full"></div>
          <div className="h-11 w-11 bg-white rounded-full"></div>
          <div className="h-11 w-11 bg-white rounded-full"></div>
        </div>
      </div>

      {/* <!-- Section 2 --> */}
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <div className="text-center md:text-end">언어를 선택하세요</div>
        <div className="flex justify-center md:justify-end mt-2">
          {/* <!-- Dropdown Placeholder --> */}
          <select className="bg-black text-white border border-white px-4 py-2">
            <option value="kr">한국어</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>

    {/* <!-- Divider --> */}
    <div className="h-1 w-full bg-white mt-4"></div>

    {/* <!-- Footer Links --> */}
    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-center">
    <span>|</span><a href="#" className="text-white"> 개인정보처리방침</a>
     <span>|</span> <a href="#" className="text-white">이용약관</a>
     <span>|</span><a href="#" className="text-white">품질오류신고</a>
     <span>|</span><a href="#" className="text-white">품질오류신고확인</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Footer