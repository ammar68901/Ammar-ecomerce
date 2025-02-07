import { client } from '@/sanity/lib/client';
import 'boxicons/css/boxicons.min.css';

import Image from 'next/image';
import Link from 'next/link';

async function Sticker() {
  const response = await client.fetch(
    `*[_type == "card1"]{ 
      Cardname, 
      price, 
      "Cardimage": Cardimage.asset->url 
    }`
  );

  return (
    <div className="flex flex-wrap justify-center gap-12 mb-6">
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
          <div className='w-[225px] h-[300px] border-2 rounded-sm cursor-pointer group'>
            {/*------------------- FIRST DIV ----------------*/}
            <div className='w-[100%] h-[60%] border-2 flex flex-col justify-between bg-[#f6f7fb]'>
              <div className='w-[100%] h-[20%] bg-transparent z-10 flex gap-4'>
                <i className='bx bx-heart text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
                <i className='bx bx-cart text-[#00ffff] cursor-pointer hover:text-blue-900 text-[20px]'></i>
                <i className='bx bx-zoom-in text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
              </div>
              <Image src={item.Cardimage} alt={item.Cardname} width={100} height={100} className='self-center' />
              <div className='ml-[5rem]'>
                <button className='bg-[#65d161] rounded-1 w-[60px] relative hidden group-hover:block'>View</button>
              </div>
            </div>
            {/*------------------- FIRST DIV ----------------*/}

            {/*------------------- SECOND DIV ----------------*/}
            <div className='w-[100%] h-[40%] flex flex-col items-center gap-1 bg-gray-100 group-hover:bg-[#2f1ac4]'>
              <p className='text-[#e62e84] group-hover:text-white'>{item.Cardname}</p>
              <p className='text-[#00ffff] group-hover:text-white font-bold -mt-2 text-[25px]'>
                -<span className='text-[#e62e84]'>-</span><span className='text-yellow-400'>-</span>
              </p>
              <p className='text-[#e62e84] group-hover:text-white'>Code-Y465554</p>
              <p className='text-[#e62e84] group-hover:text-white'>
                {item.price}$ <span className="max-800:text-[5px] text-[10px] line-through text-red-600">500$</span>
              </p>
            </div>
            {/*------------------- SECOND DIV ----------------*/}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Sticker;


