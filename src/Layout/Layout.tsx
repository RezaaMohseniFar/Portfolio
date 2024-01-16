import { ReactNode } from "react"
import Header from "../Components/Header/Index/Header"


interface Iprops{
  children : ReactNode
}
const Layout = ({children}:Iprops) => {
  return (
    <>
        <Header/>
        {children}
    </>
    )
}

export default Layout