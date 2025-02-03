"use client";
import Button from '@/components/button';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
export  default function ProDetail  () {

  const searchParams = useSearchParams();
    const imageUrl = searchParams.get('src');

    
  return (
    <>
    <div className="w-[100%] p-5 flex gap-7 max-800:flex-wrap max-800:justify-center ">
  
   <div className="w-[40%] h-[300px] border border-gray-800 max-800:w-[90%] flex justify-center items-center overflow-hidden ">
   <div className="w-[80%] relative h-[300px]">  
  <Image
    src={imageUrl ?? '/default-image.jpg'}
    alt="Playwood Arms Chair"
    fill
    className="object-cover"
  />
</div>
   </div>
<div className="leading-10 max-800:leading-7 max-800:flex max-800:flex-col max-800:items-center">
    <h1 className="text-blue-800 font-bold">Playwood arms chairs</h1>
    <p className="text-gray-500">$23</p>
    <div className='flex gap-3 '>

     <p className="text-blue-800 font-bold">Color </p>
     <p className='text-[#00ffff] group-hover:text-white font-bold  text-[25px] '>-<span className='text-[#e62e84]'>-</span><span className='text-yellow-400'>-</span></p>
    </div>
     <p className="text-gray-500 text-[1.9vw] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil reprehenderit repellendus. Corp.</p>
     <Button name="Add to cart" />
     <div className='flex gap-7 mt-7'>
     <p className="text-blue-800 font-bold underline">Catogaries</p>
     <p className="text-blue-800 font-bold underline">Tag</p>
    <p className="text-blue-800 font-bold underline">Share</p>
     </div>
</div>


    </div>


    </>
  );
}
