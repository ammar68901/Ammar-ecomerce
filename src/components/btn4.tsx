
import Image from "next/image"
export default function Btn4 (props:{src:string}) {
  
    return (
      <div className="w-[255px] h-[297px] border border-gray-500 rounded-[10px] overflow-hidden">
        <div>
            <Image src={props.src} alt="pic" width={300} height={40}/>
            
            </div>
          <div className="flex flex-col gap-[0.5rem] p-1 bg-gray-200">
            <p className="text-[12px] text-[#e62e84]">saber Ali <span>21 Aug 2020</span></p>
            <h3 className="text-[13px] font-bold text-blue-800" >Top essential Trend in 2021</h3>
            <p className="text-[12px]">More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <a href="" className="text-[12px] text-[#e62e84] underline">Read More</a>
          </div>
      </div>
    )
  }