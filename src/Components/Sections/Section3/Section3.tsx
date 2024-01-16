import Card from "./Card";
import MarketSvg from "./SVG/MarketSvg";
import ResSvg from "./SVG/ResSvg";
import WebSvg from "./SVG/WebSvg";

const Section3 = () => {
  return (
    <section>
        <div className="mx-auto px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
            <div className="-mx-4 flex flex-wrap">
                <div className="px-4 min-h-[1px] w-full relative sm:max-w-full sm:flex-[0_0_100%]">
                    <div className="text-center mb-16">
                        <h3 className="font-bold text-5xl">Services</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div className="my-4 mx-auto bg-[#000] w-10 h-1"></div>
                    </div>
                </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
                <Card svg={<WebSvg/>} title="web developer"/>
                <Card svg={<ResSvg/>} title="responsive design"/>
                <Card svg={<MarketSvg/>} title="marketing service"/>
            </div>
        </div>
    </section>
  )
}

export default Section3;
