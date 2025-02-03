"use client";
import 'boxicons/css/boxicons.min.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
    
function ResSticker(props:{src:string}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/prodetail?src=${encodeURIComponent(props.src)}`);
    };

    return (
        <>
            <div onClick={handleClick} className='w-[20vw] h-[45vh] max-800:w-[130px] max-800:h-[250px] border-2 rounded-[20px] cursor-pointer group mb-2'>
                {/*------------------- FIRST DIV ----------------*/}
                <div className='w-[100%] h-[60%] border-2 rounded-[20px] flex flex-col justify-between bg-[#f6f7fb]'>
               
                    <div className='w-[100%] h-[20%] bg-transparent z-10 flex gap-4 ml-2'>
                        <i className='bx bx-heart text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
                        <i className='bx  bx-cart text-[#00ffff] cursor-pointer hover:text-blue-900 text-[20px]'></i>
                        <i className='bx bx-zoom-in text-[#00ffff] text-[20px] cursor-pointer hover:text-blue-900'></i>
                    </div>
                    <Image src={props.src} alt={'ChairsPIc'} width={130} height={100} className='self-center'/>
                   

                </div>{/*------------------- FIRST DIV ----------------*/}

                {/*------------------- SECOND DIV ----------------*/}
                <div className='w-[100%] h-[40%] rounded-[20px]  flex flex-col items-center gap-1 bg-white group-hover:bg-[#2f1ac4]  '>
                    <p className='text-[#e62e84] group-hover:text-white  text-[1.3vw]  max-800:text-[10px]'>Cantilver chair</p>
                    <p className='text-[#00ffff] group-hover:text-white text-[1.3vw] max-800:text-[10px] font-bold -mt-2 '>-<span className='text-[#e62e84]'>-</span><span className='text-yellow-400'>-</span></p>
                    <p className=' text-[#e62e84] group-hover:text-white text-[1.3vw] max-800:text-[10px]'>Code-Y465554</p>
                    <p className='text-[#e62e84]  group-hover:text-white text-[1.3vw] max-800:text-[10px]'>42$</p>
                </div>
                {/*------------------- SECOND DIV ----------------*/}
            </div>
        </>
    )
}

export default ResSticker;
