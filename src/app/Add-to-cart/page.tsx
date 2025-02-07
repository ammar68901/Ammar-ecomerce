import 'boxicons/css/boxicons.min.css';

import Image from 'next/image'
import Button from '@/components/button'
import IN_DEC from '@/components/IN_DEC'

function Add_to_cart  ()  {
  return (
    <div className='w-full  mb-20  '>
    
    <div className='w-[95%] h-[70px] bg-gray-300 m-auto border border-black rounded flex justify-center'>
        <div className='w-[125px] h-[90%]'>
            
            <Image src={'/Assets/pic35.png'} alt={'product pic'} width={72} height={60} />
             </div>
        <div className='max-800:leading-[21px] items-center leading-7'>
            <p className='text-gray-500 ml-5 font-serif text-[1.3vw] max-800:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime ullam </p>
            <div className='flex gap-6 '>
                <IN_DEC />
            <p>$</p>
            <i className="bx bxs-trash text-red ml-1 text-2xl cursor-pointer "></i>
                </div>
        </div>
        

    </div>
    




<div className='w-full text-center hidden'>
<h1 className='text-[#9ea1c7] mt-[150px] mb-5'>
You have no items in your cart, please go and add to cart.</h1>
<Button name="Go To Home" />
</div>
    </div>
  )
}

export default Add_to_cart