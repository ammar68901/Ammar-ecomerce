import Image from "next/image"
export default function Heading (props:{img1:string ; h3:string; para:string}  ) {
    return (
      <div className="w-[200px] h-[280px] rounded flex flex-col justify-end items-center gap-8 bg-gray-100">
          <Image src={props.img1} alt={'img'} width={80} height={40}/>

          <h3 className="text-blue-800 font-sans font-bold text-[25px]">{props.h3}</h3>
          <p className="text-gray-400">{props.para}</p>
      </div>
    )
  }
