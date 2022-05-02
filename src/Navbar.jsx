import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-400  h-20 flex items-center  justify-between m-2 sticky top-0 absolute">

         <div className="flex items-center  justify-between space-x-4 ">
             <div>
             <img src="https://picsum.photos/200" className="rounded-full  h-20" />
             </div>
           
           <div>
           <h1 className="font-bold text-black text-5xl">Sohel Khan</h1>
           </div>
         </div>



 
       <div>

        <Link to="#Home" className="font-bold text-3xl text-balck mr-8  hover:text-yellow-400">
          Home
        </Link>
        <Link to="#about" className="font-bold text-3xl text-black mr-8 hover:text-yellow-400  ">
          About
        </Link>
        <Link to="#Project" className="font-bold text-3xl text-black mr-8 hover:text-yellow-400">
          Projects
        </Link>
        
        <Link to='#contect' className="font-bold text-3xl text-black mr-8  hover:text-yellow-400" >Contect
        </Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;
