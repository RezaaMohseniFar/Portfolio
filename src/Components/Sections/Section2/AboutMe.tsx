interface Iprops {
    text : string;
}

const AboutMe = ({text}:Iprops) => {
  return (
    <p className="mb-4 mt-0 font-light text-xl">{text}</p>
  )
}

export default AboutMe
