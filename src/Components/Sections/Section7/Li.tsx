import { ReactNode } from "react"

interface Iprops {
    svg :ReactNode;
    text : string;
}

const Li = ({svg,text}:Iprops) => {
  return (
    <li className="flex items-center mb-4">
        <span className="mr-2">
            {svg}
        </span>
        {text}
    </li>
  )
}

export default Li