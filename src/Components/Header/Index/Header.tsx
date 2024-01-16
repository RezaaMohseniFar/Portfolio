import HeaderLi from "../HeaderLi/HeaderLi"
import HamburgerMenu from "../Svg/HamburgerMenu"

const Header = () => {
  return (
    <>
        <nav className="bg-black py-2 px-4 flex content-between items-center flex-wrap  md:flex-nowrap md:justify-start fixed top-0 right-0 left-0 z-[1030] ">
            <div className="mx-auto px-4 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] flex items-center justify-between flex-wrap md:flex-nowrap">
                <a className="inline-block py-[0.3125rem] mr-4 text-white text-2xl font-semibold" href="#">
                DevFolio
                </a>
                <button className="py-1 px-3 leading-none bg-transparent border border-transparent rounded relative md:hidden">
                    <HamburgerMenu/>
                </button>
                <div className="items-center flex-grow basis-full justify-end hidden md:flex md:basis-auto">
                    <ul className="flex">
                        <HeaderLi text="Home" isActive/>
                        <HeaderLi text="ABOUT" isHover/>
                        <HeaderLi text="SERVICES" isHover/>
                        <HeaderLi text="WORK" isHover/>
                        <HeaderLi text="BLOG" isHover/>
                        <HeaderLi text="CONTACT" isHover/>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header

