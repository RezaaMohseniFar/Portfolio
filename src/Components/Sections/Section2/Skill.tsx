interface Iprops {
    Corse : string;
    percent : string;
}

const Skill = ({Corse ,percent}: Iprops) => {
  return (
    <div    >
        <span>{Corse}</span>
        <span className="float-right">{percent}%</span>
    </div>
  )
}

export default Skill;
