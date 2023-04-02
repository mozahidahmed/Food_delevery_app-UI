import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-12">
            <div className="div">
                    <img src="https://i.ibb.co/6DTF0TH/Bella-Olonje-logo-111-1.png" className="w-[206px] h-[101.76p]" alt="" />
            </div>
            <div className="flex gap-[77px]">
                    <nav className='text-[#FA4A0C] font-bold'>Home</nav>  
                    <nav className='font-bold'> Product</nav>  
                    <nav className='font-bold'> Faq</nav>  
                    <nav className='font-bold'>Contact</nav>              
            </div>
         </div>
        </div>
    );
};

export default Navbar;