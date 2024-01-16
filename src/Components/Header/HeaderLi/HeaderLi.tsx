interface Iprops {
    text : string
    isActive ? : boolean
    isHover ? : boolean
}

const HeaderLi = ({text , isHover , isActive}:Iprops) => {
  return (
        <li className="relative px-[10px]">
            <a href="#" className= {`text-white p-2 font-semibold ${ isActive ? "border-b-2" : ""} ${ isHover ? "hover:border-b-2" : ""}`} >
                {text}
            </a>
        </li>
    )
}

export default HeaderLi

""