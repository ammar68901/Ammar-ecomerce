import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default async function Btn() {
  const response = await client.fetch(
    `*[_type == "card2"]{ 
      Cardname, 
      price, 
      "Cardimage": Cardimage.asset->url 
    }`
  );

  return (
    <div className="flex flex-wrap justify-center gap-20 mb-12">
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
            className="w-[250px] h-[280px] border border-gray-400 rounded bg-center bg-cover group max-800:w-[230px] max-800:h-[250px]"
            style={{ backgroundImage: `url(${item.Cardimage})` }}
          >
            <div className="flex flex-col gap-[5.7rem]">
              <div className="w-[55px] h-[25px] rounded-full bg-blue-800 items-center mt-5 -rotate-45">
                <p className="text-white font-sans">Sale`s</p>
              </div>
              <div className="w-[100%] h-[20%] bg-transparent z-10 flex flex-col gap-4">
                <i className="bx bx-heart text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900"></i>
                <i className="bx bx-cart text-[#00ffff] cursor-pointer hover:text-blue-900 text-[20px]"></i>
                <i className="bx bx-zoom-in text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900"></i>
              </div>
            </div>
            <div className="flex justify-around bg-gray-300 group-hover:bg-[#2f1ac4] group-hover:text-white">
              <p className="max-800:text-[13px]">{item.Cardname}</p>
              <p className="max-800:text-[13px]">
                {item.price}$<span className="max-800:text-[5px] text-[9px] line-through text-red-600">500$</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}



