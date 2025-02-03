import Resbtn from "@/components/rpbtn";
import Image from "next/image";
export default function Contact() {
    return(
        <>
        <div className="flex max-800:flex-wrap">
      <div className="p-3 ">
        <div className=" mb-3">

        <h1 className="mb-3 text-blue-600 font-bold text-[30px]">Get In Touch</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
        </div>
        <div className="flex flex-col gap-4">
            <input type="text" placeholder="YOUR NAME" className="border w-[100px]"/>
            <input type="text" placeholder="YOUR NAME" className="border w-[100px]"/>
            <input type="text" placeholder="SUBJECT" className="border w-[150px]"/>
            <textarea name="" id="" placeholder="TYPE YOUR TEXT" className="border w-[40%] h-[100px]" ></textarea>
            <Resbtn name={"SEND MAIL"}/>
        </div>
      </div>

<div>
    <Image src={"/Assets/pic31.png"} alt={"sofa"} width={350} height={50} />
</div>
        </div>
        
        </>
    )
}