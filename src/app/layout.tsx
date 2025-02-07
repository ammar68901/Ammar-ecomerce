import 'boxicons/css/boxicons.min.css';
import Image from 'next/image';
import "./globals.css";
import Resbtn from '@/components/rpbtn';
import HamburgerMenu from '@/components/humburge';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'E-commerce',
  description: 'Generated by Ammar',
  icons: {
    icon: "/Hekto.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
      </head>
      <body>
        <nav className="h-[20vh] w-[100vw]">
          {/* FIRST NAV */}
          <div className="h-[30%] w-[100%] bg-[#7e33e0] flex justify-around">
            <div className='flex gap-2 items-center'>
              <i className='bx bxl-gmail nav1text max-800:text-[10px]'></i>
              <p className='nav1text max-800:text-[10px]'>ammar@gamil.com</p>
              <i className='bx bxs-phone-call nav1text max-800:text-[5px]'></i>
              <p className='nav1text max-800:text-[10px]'>+92 2398494</p>
            </div>
            <div className='flex gap-2 max-800:gap-1 items-center'>
              <p className='nav1text max-800:text-[6px]'>English</p>
              <i className='bx bx-chevron-down nav1text max-800:text-[10px]'></i>
              <p className='nav1text max-800:text-[6px]'>USD</p>
              <i className='bx bx-chevron-up nav1text max-800:text-[10px]'></i>
              <p className='nav1text max-800:text-[6px]'>Login</p>
              <i className='bx bx-user nav1text max-800:text-[10px]'></i>
              <p className='nav1text max-800:text-[6px]'>Wishlist</p>
              <i className='bx bx-heart nav1text max-800:text-[10px]'></i>
              <i className='bx bx-cart nav1text max-800:text-[10px]'></i>
            </div>
          </div>

          {/* SECOND NAV */}
          <div className='w-[100%] h-[70%] bg-white flex justify-around items-center'>
            <div>
              <p className='text-[30px] font-bold'>HEKTO</p>
            </div>
            <div className='max-800:hidden'>
              <ul className='flex'>
                <li className='p-3'><Link href={"/"}>Home</Link></li>
                <li className='p-3'><Link href={"/Login"}>Login</Link></li>
                <li className='p-3'><Link href={"/Products"}>All Products</Link></li>
                <li className='p-3'><Link href={"/Blog"}>Blog</Link></li>
                <li className='p-3'><Link href={"/About"}>About</Link></li>
                <li className='p-3'><Link href={"/Contact"}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <input type="text" className='w-[23vw] rounded-full p-1 border-2 border-black' placeholder='SEARCH ' />
            </div>
            <div>
              <HamburgerMenu />
            </div>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <div>
          <Image src={"/Assets/pic29.png"} alt="pic" width={1400} height={100} className="w-full h-full object-cover mb-3" />
        </div>

        <footer className='w-[100%] bg-[#eeeffb] flex flex-wrap gap-3 p-3'>
          <div className="h-[100%] w-[300px]">
            <p className='text-[30px] font-bold mb-4'>HEKTO</p>
            <div className='flex mb-7'>
              <input type="text" className='w-15 bg-gray-200 text-black' placeholder='Enter Your Email' />
              <span><Resbtn name={"Sign Up"} /></span>
            </div>
            <ul className='leading-7'>
              <li>Contact Info</li>
              <li>17 Princess Road, London, Greater London NW1 8JR, UK</li>
            </ul>
          </div>
          <div className="h-[100%] w-[300px]">
            <h3 className='text-black font-bold mb-5 text-[20px]'>Categories</h3>
            <ul className='leading-7'>
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
        </footer>

        {/* SNIPCART SCRIPT */}
        <Script 
  src='https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js'
  strategy='afterInteractive'
/>

        
        {/* SNIPCART DIV */}
        <div hidden id='snipcart' data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} data-config-modal-style="none"></div>

      </body>
    </html>
  );
}
