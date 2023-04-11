
import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
    

    return (
        <div className="">
  <header>
    <div className="relative z-20 border-b bg-white">
        <div className="px-2 md:px-12 lg:container  lg:px-4 lg:py-2">
          <div className="flex items-center justify-between">
            <div className="relative z-20">
              <a href="#">
                <img src="https://i.ibb.co/6DTF0TH/Bella-Olonje-logo-111-1.png" classNameName="w-[206px] h-[101.76p]" alt="" />              </a>
            </div>

            <div className="flex items-center justify-end border-l lg:border-l-0">
              <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden/>
              <label for="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
              </label>

              <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                    <li>
                          <span className="relative text-[#FA4A0C] text-2xl font-bold">Home</span>
                     
                    </li>
                    <li>
                        <span className="relative group-hover:text-cyan-800 text-2xl font-bold">Products</span>
                     
                    </li>
                    <li >
                        <span className="relative group-hover:text-cyan-800 text-2xl font-bold">req</span>
                      
                    </li>
                    <li>
                        <span className="relative group-hover:text-cyan-800 text-2xl font-bold">Contact</span>
                      
                    </li>
                   <Link to="/app">
                          <li>
                            <span className="relative group-hover:text-cyan-800 text-2xl font-bold">App</span>

                          </li>
                   </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </header>
</div>
    );
};

export default Navbar;