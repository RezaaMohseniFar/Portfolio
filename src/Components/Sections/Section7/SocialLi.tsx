import { ReactNode } from "react"

interface Iprops {svg : ReactNode

}

const SocialLi = ({svg}:Iprops) => {
  return (
    <li className="inline-block">
        <a href="#">
            <span className="">
                {svg}
            </span>
        </a>
    </li>
  )
}

export default SocialLi