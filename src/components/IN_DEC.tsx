"use client";
import React, { useState } from 'react'

export default function IN_DEC  ()  {

    const [count, setCount] = useState(0);
  return (
    <div className='flex gap-2 ml-5'>
        <button onClick={() => {setCount(count - 1)
            if (count <= 0) {
                setCount(0)
            }
        }

        } className='w-[25px] h-[25px] text-white bg-slate-600'>-</button>
        <p className='text-gray-500  text-[1.3vw] max-800:text-[19px] '>{count}</p>
        <button onClick={() => {setCount(count + 1) 
            if (count >= 5) {
                setCount(5)
            }
        }

        } className='w-[25px] text-white h-[25px] bg-slate-600'>+</button>
    </div>
  )
}
