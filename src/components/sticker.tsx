"use client";
import 'boxicons/css/boxicons.min.css';

import Image from 'next/image';
import { useRouter } from "next/navigation";
    

function Sticker(props:{src:string}) {

    const router = useRouter(); 

    const handleClick = () => {
        router.push(`/Prodetail?src=${encodeURIComponent(props.src)}`); 
    };
   
    return (
        <>
            <div className='w-[225px] h-[300px] border-2 rounded-sm cursor-pointer group ' onClick={handleClick}  >
                {/*------------------- FIRST DIV ----------------*/}
                <div className='w-[100%] h-[60%] border-2  flex flex-col justify-between bg-[#f6f7fb]'>
               
                    <div className='w-[100%] h-[20%] bg-transparent z-10 flex gap-4'>
                        <i className='bx bx-heart text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
                        <i className='bx  bx-cart text-[#00ffff] cursor-pointer hover:text-blue-900 text-[20px]'></i>
                        <i className='bx bx-zoom-in text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
                    </div>
                    <Image src={props.src} alt={'ChairsPIc'} width={100} height={100} className='self-center'/>
                    <div className='ml-[5rem]'>
                        <button className='bg-[#65d161] rounded-1 w-[60px] relative hidden group-hover:block'>Views</button>
                    </div>

                </div>{/*------------------- FIRST DIV ----------------*/}

                {/*------------------- SECOND DIV ----------------*/}
                <div className='w-[100%] h-[40%]   flex flex-col items-center gap-1 bg-gray-100 group-hover:bg-[#2f1ac4]  '>
                    <p className='text-[#e62e84] group-hover:text-white'>Cantilver chair</p>
                    <p className='text-[#00ffff] group-hover:text-white font-bold -mt-2 text-[25px]'>-<span className='text-[#e62e84]'>-</span><span className='text-yellow-400'>-</span></p>
                    <p className=' text-[#e62e84] group-hover:text-white'>Code-Y465554</p>
                    <p className='text-[#e62e84]  group-hover:text-white'>42$</p>
                </div>
                {/*------------------- SECOND DIV ----------------*/}
            </div>
        </>
    )
}

export default Sticker