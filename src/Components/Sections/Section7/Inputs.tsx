interface Iprops {
  type: string;
  name : string;
  placeholder : string;
}

const Inputs = ({ type, name , placeholder }: Iprops) => {
  return (
    <div className="px-4 min-h-[1px] w-full relative sm:max-w-full sm:flex-[0_0_100%] mb-4">
      <div className="mb4">
        <input
        placeholder={placeholder}
          name={name}
          type={type}
          className="outline-mainBlue w-full h-[calc(2.25rem+2px)] rounded border border-[#ced4da] bg-clip-padding bg-white text-[#495057] text-base py-[0.375rem] px-3 "
        />
      </div>
    </div>
  );
};

export default Inputs;
// form-control {
//     display: block;
//     width: 100%;
//     height: calc(2.25rem + 2px);
//     padding: 0.375rem 0.75rem;
//     font-size: 1rem;
//     line-height: 1.5;
//     color: #495057;
//     background-color: #fff;
//     background-clip: padding-box;
//     border: 1px solid #ced4da;
//     border-radius: 0.25rem;
//     transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
// }
