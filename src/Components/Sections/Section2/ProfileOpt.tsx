interface Iprops {
    property : string
    value : string
}

const ProfileOpt = ({property , value} : Iprops) => {
  return (
    <p className="mb-4 mt-0">
        <span className="text-[1.1rem] text-[#1e1e1e] font-semibold">{property}</span>
        <span>{value}</span>
    </p>
  )
}

export default ProfileOpt
