import { ReactNode } from "react";

interface Iprops {
    svg : ReactNode;
    num : number;
    title : string;
}

function Works({svg , num , title}:Iprops) {
  return (
    <div className="px-4 min-h-[1px] w-full relative sm:max-w-[25%] sm:flex-[0_0_25%] group">
        <div className="text-center sm:mb-7 flex flex-col items-center">
            <div className="mb-4">
                <span className="text-center mx-auto rounded-[50%] text-3xl w-16 h-16">
                    {svg}
                </span>
            </div>
            <div>
                <p className="text-3xl">
                    {num}
                </p>
                <span className="uppercase">
                    {title}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Works;


