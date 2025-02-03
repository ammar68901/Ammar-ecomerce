export default function Resbtn (props:{name:string}) {
    return (
      <div>
          <button className="bg-[#e62e84] rounded w-[30] h-[6vh] text-white">{props.name}</button>
      </div>
    )
  }