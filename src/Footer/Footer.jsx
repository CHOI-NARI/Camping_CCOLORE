import FooterText from "./FooterText";
import FooterBox from "./FooterBox";
import { FaInstagramSquare } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-40 h-[350px] flex justify-center items-center gap-24 bg-emerald-50 px-32 py-10">
      <div className="text-xs">
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            <FooterText text="Contact" />
            <FooterText text="1551-1240" />
          </div>
          <div className="flex flex-col mt-5 gap-1">
            <FooterText text="상담시간: 10:00 - 17:00" />
            <FooterText text="점심시간: 12:00 - 13:00" />
            <FooterText text="휴무: 토요일, 일요일, 법정 공휴일" />
          </div>
        </div>
        <div className="flex flex-col mt-7 gap-">
          <FooterText text="ccolore@naver.com" />
          <FooterText text="12925 경기도 하남시 미사대로 540 현대지식산업센터2차 B동 416호" />
          <FooterText text="농협 301-0338-3476-11 / 예금주: 주식회사 꼴로르" />
        </div>
        <div className="mt-7 text-xs">
          <FooterText text="Copyright ⓒ 2024 (주)꼴로르 All rights reserved." />
        </div>
      </div>
      <div>
        <div className="flex flex-col text-xs gap-2">
          <FooterText text="주식회사 꼴로르 | 대표자 : 정현동, 홍준기" />
          <FooterText text="개인정보처리관리자 : 정현동, 홍준기" />
          <FooterText text="사업자번호 : 453-87-02673 [사업자정보확인]  |  통신판매업 신고 : 2023-경기하남-0405" />
        </div>
        <div className="mt-7 flex gap-3 text-xs ">
          <FooterBox btn="A/S 문의하기" className="border-spacing-1" />
          <FooterBox btn="CC LETTER 구독" />
        </div>
        <div className="mt-5 flex items-center gap-4">
          <FaInstagramSquare className="text-4xl" />
          <SiKakaotalk className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
