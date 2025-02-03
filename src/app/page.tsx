import Image from "next/image";
import React from "react";

import Button from "@/components/button";
import Sticker from "@/components/sticker";
import Heading from "@/components/heading";
import Btn from "@/components/btn2";
import Offex from "@/components/offex";
import Btn3 from "@/components/btn3";
import Btn4 from "@/components/btn4";


export default function Home() {
  return (
    <>
      {/*------------------- FIRST DIV ----------------*/}
      <div className="border-2     p-0.3  ">
        <div className=" ">
          <Image src={"/Assets/pic1.png"} alt={"lamps"} width={100} height={100} />
        </div>
        <div className="flex p-2 gap-3 max-800:flex-col max-800:gap-0">
          <div className="bg-transparent  -mt-5  " >
            <h4 className="text-[#e62e84] font-Lato">Best Furniture For Your Castle....</h4>
            <h1 className="text-[50px] font-bold">NEW FUTNITURES COLLECTION</h1>
            <h1 className="text-[40px] font-bold">TRENDS IN 2025</h1>
            <h4 className="text-[#9ea1c7]">Lorem ipsum dolor sit amet,  elit. Magna in est adipiscing
              in phasellus non in justo.</h4>
            <Button name="Shop Now" />

          </div >
          <div className="relative  max-800:self-center ">
            <Image src={"/Assets/pic2.png"} alt={"sofa"} width={350} height={50} />
          </div>
        </div>
      </div>
      {/*------------------- FIRST DIV ----------------*/}
      {/*------------------- SECOND DIV ----------------*/}

      <div className="w-[100%]">
        <div className="text-center  mt-10 mb-6">
          <Heading heading={"Featured Products"} />
        </div>
        <div className="flex flex-wrap w-[100%] items-center justify-center gap-20">
          <div><Sticker src="/Assets/pic17.png" /></div>
          <div><Sticker src="/Assets/img2.png" /></div>
          <div><Sticker src="/Assets/img3.png" /></div>
          <div><Sticker src="/Assets/pic16.png" /></div>
        </div>
      </div>




      <div className="w-[100%]">
        <div className="text-center mb-3 mt-12 ">
          <Heading heading="Leatest Products" />
        </div>
        <div className="w-[100%] flex justify-center mb-7">
          <ul className="flex gap-5 ">
            <li className="text-[14px]">New Arrival</li>
            <li className="text-[14px]">Best Seller</li>
            <li className="text-[14px]">Featured</li>
            <li className="text-[14px]">Special Offer</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-20 mb-12">
          <Btn btnpic="/Assets/pic4.png" />
          <Btn btnpic="/Assets/pic5.png" />
          <Btn btnpic="/Assets/pic6.png" />
          <Btn btnpic="/Assets/pic7.png" />
          <Btn btnpic="/Assets/pic8.png" />
          <Btn btnpic="/Assets/pic9.png" />
        </div>

        <div className="w-[100%] text-center">
          <Heading heading="What Shopex Offer!" />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-5">
          <Offex img1="/Assets/pic10.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
          <Offex img1="/Assets/pic11.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
          <Offex img1="/Assets/pic12.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
          <Offex img1="/Assets/pic13.png" h3="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />

        </div>


        <div className="w-[100%] h-[50vh]  flex justify-center bg-gray-100 mb-6">
          <div className="w-[90%] h-[100%]  bg-[url('/Assets/pic14.png')] bg-no-repeat bg-center bg-contain">
          </div>
        </div>

        <div className="text-center mb-5">
          <Heading heading="Trending Products" />
        </div>
        <div className="flex flex-wrap justify-center gap-12 mb-6">
          <Sticker src="/Assets/pic18.png" />
          <Sticker src="/Assets/pic15.png" />
          <Sticker src="/Assets/pic16.png" />
          <Sticker src="/Assets/pic17.png" />
        </div>

        <div className="flex flex-col items-center mb-5">
          <Heading heading="Discount-Item" />
          <div >
            <ul className="flex gap-5">
              <li className="text-[14px]">Wood Chair</li>
              <li className="text-[14px]">Plastic Chair</li>
              <li className="text-[14px]">Sofa Collection</li>
            </ul>
          </div>
          <div className="w-[100%] h-[50vh]  flex justify-center bg-gray-100 mb-6">
          <div className="w-[90%] h-[100%]  bg-[url('/Assets/pic19.png')] bg-no-repeat bg-center bg-contain">
          </div>
        </div>
        </div>
                  
        <div className="w-[100%] text-center">
          <Heading heading="Top Categaries" />
        </div>
          <div className="flex flex-wrap justify-center gap-8 mb-5">
               
                     <Btn3 btnpic="/Assets/sofa7.jpegnp"/>
                     <Btn3 btnpic="/Assets/sofa9.webp"/>
                     <Btn3 btnpic="/Assets/pic22.png"/>
                     <Btn3 btnpic="/Assets/sofa8.jpeg"/>
            </div>
             
      <div className="w-[100%] h-[45vh] border border-gray-500 relative mb-6">
  <Image
    src={"/Assets/pic24.png"}
    alt="pic"
    width={1400}
    height={100}
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
    <Heading heading={"Get Latest Update By Subscribe"} />
    <Heading heading={"Our Newsletter"} />
    <Button name="Shop Now" />
  </div>
</div>
        
           
           <div className="w-[100%] text-center mb-6">
          <Heading heading="Latest BLogs" />
           </div>
       <div className="flex flex-wrap justify-center gap-8 mb-8">
       <Btn4 src="/Assets/pic25.png"/>
       <Btn4 src="/Assets/pic26.png"/>
       <Btn4 src="/Assets/pic27.png"/>
       </div>



       
      </div>
    </>
  );
}
