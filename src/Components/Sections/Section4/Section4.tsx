import CalenderSvg from "./SVG/CalenderSvg";
import ClientSvg from "./SVG/ClientSvg";
import DoneSvg from "./SVG/DoneSvg";
import GiftSvg from "./SVG/GiftSvg";
import Works from "./Works";

const Section4 = () => {
  return (
    <div className="workspace py-32 relative">
      <div className="mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
        <div className=" -mx-4 flex flex-wrap">
            <Works svg={<DoneSvg/>} num={450}  title="work complited"/>
            <Works svg={<CalenderSvg/>} num={1.5}  title="years of exprience"/>
            <Works svg={<ClientSvg/>} num={100}  title="Total clients"/>
            <Works svg={<GiftSvg/>} num={2}  title="award won"/>
        </div>
      </div>
    </div>
  );
};

export default Section4;
