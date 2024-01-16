import { ReactNode } from "react";

interface Iprops {
    svg : ReactNode;
    title : string;
}

const Card = ({svg , title}:Iprops) => {
  return (
    <div className="px-4 min-h-[1px] w-full relative md:max-w-[33.333333%] md:flex-[0_0_33.333333%] group :">
      <div className="service-box mb-12 rounded-2xl py-10 px-[1.3rem] bg-white flex flex-col items-center">
        <div className="text-[#1e1e1e] mb-4">
          <span className="service-box-span text-center mx-auto rounded-[50%] text-6xl w-96 h-full ">
            {svg}
          </span>
        </div>
        <div>
          <h2 className="py-2 text-center uppercase text-2xl whitespace-nowrap">{title}</h2>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora
            perferendis eum non provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

