interface Iprops {
  src: string;
  title : string;
}

const Portfolio = ({ src,title }: Iprops) => {
  return (
    <div className=" px-4 min-h-[1px] w-full relative md:max-w-[33.333333%] md:flex-[0_0_33.333333%]">
      <button className="workspace bg-white mb-12">
        <div className="overflow-hidden">
          <img src={src} alt="" />
        </div>
        <div className="pt-8 pr-[3%] pb-4 pl-[4%]">
          <div className="-mx-4 flex flex-wrap">
            <div className="px-4 min-h-[1px] w-full relative sm:max-w-[66.666667%] sm:flex-[0_0_66.666667%]">
              <h2 className="text-xl text-left whitespace-nowrap">
                {title}
              </h2>
              <div className="text-sm text-left">
                <span className="text-mainBlue">Web Design</span>
                /
                <span>18 Sep. 2018</span>
              </div>
            </div>
            <div className="px-4 min-h-[1px] w-full relative md:max-w-[33.333333%] md:flex-[0_0_33.333333%]">
                <div className="text-mainBlue float-right text-5xl">+</div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Portfolio;


