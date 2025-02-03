

function Button(props:{name:string}){
  return (
    <div>
        <button className="w-[150px] h-[50px] rounded-[2px] bg-[#e62e84] text-white font-Josefin Sans">{props.name}</button>
    </div>
  )
}

export default Button