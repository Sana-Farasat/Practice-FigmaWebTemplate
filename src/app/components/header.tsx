import Link from 'next/link';

import { IoSearchOutline } from "react-icons/io5";
function Header () {
    return(
   <header>
<div className="bg-pink-100 h-9 text-slate-400 pt-2 pl-40">
    By Using Figma Web Template
</div>
<div className="bg-slate-100 h-14 flex justify-evenly">
    <div>
    <h2 className="text-blue-600 font-bold text-3xl pt-2">Sana Mart</h2>
    </div>
    <div className="pt-3 flex">
    <IoSearchOutline className="bg-white text-3xl p-1" />
      <input type="text" placeholder="Search here" className="outline-none mb-3"/>  
    </div>
    <div className="pt-3 font-bold">
        <h2>Cart</h2>
    </div>
    <div className="flex pt-3 font-bold">
        <h2 className="mr-8">Sign Up</h2>
        <h2>Sign in</h2>
    </div>
   
</div>
<hr />
<nav className='flex justify-evenly mt-6'>
<div>
<Link href="/">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl transition duration-300 ease-in-out hover:bg-black">
                Home
            </button>
        </Link>
</div>
<div>
<Link href="/about">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl transition duration-300 ease-in-out hover:bg-black">
                About
            </button>
        </Link>
</div>
<div>
<Link href="/furniture">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl transition duration-300 ease-in-out hover:bg-black">
                Furniture
            </button>
        </Link>
</div>
<div>
<Link href="/electronics">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl transition duration-300 ease-in-out hover:bg-black">
                Electronics
            </button>
        </Link>
</div>
<div>
<Link href="/frozen">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl transition duration-300 ease-in-out hover:bg-black">
                Frozen Items
            </button>
        </Link>
</div><hr />
</nav>
   </header> 
    )
    
}

export default Header;