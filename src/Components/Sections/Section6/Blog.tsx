import TimeSvg from "./SVG/TimeSvg";

interface Iprops {
  src : string;
  h6 : string;
  title : string;
  p : string;
}

const Blog = ({src , h6 , title ,p}:Iprops) => {
  return (
    <div className="px-4 min-h-[1px] w-full relative md:max-w-[33.333333%] md:flex-[0_0_33.333333%]">
      <div className="workspace md:mb-12 rounded border border-[rgba(0,0,0,.125)] bg-clip-border bg-white break min-w-0 flex flex-col relative">
        <div className="rounded-[calc(.25rem_1px)] w-full">
          <img src={src} alt="" />
        </div>
        <div className="p-5 flex-[1_1_auto] relative">
          <div className=" overflow-hidden right-4 left-4 -top-4 text-center absolute">
            <div className=" rounded-md bg-mainBlue overflow-hidden px-4 pb-1 text-white inline-block">
              <h6 className="mb-0 text-xs uppercase inline-block text-white">
                {h6}
              </h6>
            </div>
          </div>
          <h3 className="mb-3 mt-0 text-xl">
            {title}
          </h3>
          <p>
            {p}
          </p>
        </div>
        <div className="flex items-center  gap-4 border-t border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,.03)] py-3 px-5 rounded-[0_0_calc(0.25rem_1px)_calc(0.25rem_1px)]">
          <div className=" flex items-center" >
            <img src="/public/ss.jfif" alt="" className="rounded-[50%] overflow-hidden mr-1 h-8 w-8" />
            <span>REZA MOHSENI </span>
          </div>
          <div className=" float-right flex items-center whitespace-nowrap">
            <span>
              <TimeSvg/>
            </span>
            10 min
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


// width: 32px;
// height: 32px;
// margin-right: 4px;
// overflow: hidden;
// }

// .rounded-circle {
// border-radius: 50%!important;
// }