import Button from "@/components/button"
import Image from "next/image"
export default function NotFound() {
    return(
        <>
        <div className="w-[100%] h[100vh] mb-3 flex flex-col items-center">
            <div>
                <Image  src={"/Assets/notpic.png"} alt={"Not-Found Img"} width={600}
                height={100}/>
            </div>
            <div>
                <Button name={"Back to Home"} />
            </div>
        </div>
        </>
    )
}