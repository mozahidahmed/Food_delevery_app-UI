
import React from 'react';




const Navbar = () => {
    const menuitems =
        <>
            <li className='font-bold text-2xl mx-3 text-[#FA4A0C]'>Home</li>
            <li className='text-black font-bold text-2xl mx-3'> Product</li>
            <li className='text-black font-bold text-2xl mx-3'>Faq</li>
            <li className='text-black font-bold text-2xl mx-3'> Contact</li>
        </>

    return (
        <div className="navbar  bg-gray-200 flex  justify-between bg-opacity-200 p-2 px-6 sticky top-0 z-[50]">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3  shadow bg-gray-200  w-52">

                        {menuitems}


                    </ul>
                </div>
                <img src="https://i.ibb.co/6DTF0TH/Bella-Olonje-logo-111-1.png" className="w-[206px] h-[101.76p]" alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuitems}
                </ul>
            </div>
            <div>
                <div className='navbar-end'>
                    

                </div>
            </div>


        </div>
    );
};

export default Navbar;