import Heading from "@/components/heading"
import Offex from "@/components/offex"
import Resbtn from "@/components/rpbtn"
import Image from "next/image"

export default function About() {
    return (
        <>
            <div className="flex flex-wrap gap-3 w-[100%] justify-center">
                <Image src={"/Assets/pic30.png"} alt={"pic"} width={290} height={100} />
                <div className="w-[60%] mb-2">
                    <h1 className="text-blue-800 font-bold" >Know About Our Ecomerce</h1>
                    <h1 className="text-blue-800 font-bold">Business, History</h1>
                    <p className="text-gray-500 mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <Resbtn name={"Contact Us"} />
                </div>
                <div className="w-[100%] ">
                    <div className="text-center">
                        <Heading heading={"Our Featured"} />
                    </div>
                </div>
                 

                      <div className="flex flex-wrap justify-center gap-6 mb-5">
                            <Offex img1="/Assets/pic10.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
                            <Offex img1="/Assets/pic11.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
                            <Offex img1="/Assets/pic12.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
                            <Offex img1="/Assets/pic13.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
                  
                          </div>
            </div>

        </>
    )

}