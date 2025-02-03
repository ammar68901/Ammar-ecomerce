"use client";

import { useRouter } from 'next/navigation';

export default function Btn (props:{btnpic:string}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/prodetail?src=${encodeURIComponent(props.btnpic)}`);
    };

    return (
      <div onClick={handleClick} className="w-[250px] h-[280px] border border-gray-400 rounded bg-center bg-cover group max-800:w-[230px] max-800:h-[250px]" style={{ backgroundImage: `url(${props.btnpic})` }}>
          <div className="flex flex-col gap-[5.7rem]">
            <div className="w-[55px] h-[25px] rounded-full bg-blue-800 items-center mt-5 -rotate-45"><p className="text-white font-sans">Sale`s</p></div>
            <div className='w-[100%] h-[20%] bg-transparent z-10 flex flex-col gap-4'>
                <i className='bx bx-heart text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
                <i className='bx bx-cart text-[#00ffff] cursor-pointer hover:text-blue-900 text-[20px]'></i>
                <i className='bx bx-zoom-in text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
            </div>
          </div>
          <div className="flex justify-around bg-gray-300 group-hover:bg-[#2f1ac4] group-hover:text-white">
            <p className="max-800:text-[13px]">Comfort Handy Craft</p>
            <p className="max-800:text-[13px]">$42 <span className="max-800:text-[13px]">$65</span></p>
          </div>
      </div>
    );
}

