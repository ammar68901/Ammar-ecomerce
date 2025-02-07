import { client } from "@/sanity/lib/client";

import Link from "next/link";

export default async function Btn3() {
  const response = await client.fetch(
    `*[_type == "card3"]{ 
      Cardname, 
      price, 
      "Cardimage": Cardimage.asset->url 
    }`
  );

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-5">
      {response.map((item: any, index: number) => (
        <Link 
          key={index} 
          href={{
            pathname: `/product_id/${encodeURIComponent(item.Cardname)}`,
            query: { 
              Cardname: encodeURIComponent(item.Cardname),  
              price: item.price, 
              Cardimage: encodeURIComponent(item.Cardimage) 
            }
          }}
        >
          <div
            className="w-[250px] h-[280px] border border-gray-300 rounded-[80px] bg-center bg-cover group mb-4 mt-9 cursor-pointer"
            style={{ backgroundImage: `url(${item.Cardimage})` }}
          >
            <div className="flex flex-col gap-[4rem] rounded-[100%]">
              <div className="w-[55px] h-[20px] rounded-full bg-blue-800 items-center mt-[2.25rem] -rotate-45">
                <p className="text-white font-sans">Sale`s</p>
              </div>
              <div className="w-[100%] h-[20%] bg-transparent z-10 flex flex-col gap-4">
                <i className="bx bx-heart text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900"></i>
                <i className="bx bx-cart text-[#00ffff] cursor-pointer hover:text-blue-900 text-[20px]"></i>
                <i className="bx bx-zoom-in text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900"></i>
              </div>
            </div>
            <div className="flex justify-around items-center rounded-[10px] h-[24%] bg-gray-300 group-hover:bg-[#2f1ac4] group-hover:text-white">
              <p className="text-[13px]">{item.Cardname}</p>
              <p className="text-[13px]">${item.price}</p>
            </div>
            <div className="w-[100%] h-20vh"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}

