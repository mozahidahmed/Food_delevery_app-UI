import React from 'react';

const Hero1 = () => {
    return (
        <div className=''>
          
                <hr className='mx-24 mb-12'/>
           
            <h1 className='text-3xl font-bold text-center '>How the app works</h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 px-24 mt-24 justify-center items-center">
                <div className="grid justify-center">
                    <img src="https://i.ibb.co/M8f3L5c/Rectangle-removebg-preview.png" className="shadow-xl"   alt='hjg' />
             </div>
               
                    <div className="grid justify-center sm:order-first  lg:oder-last md:order-last">
                        <h3 className='text-[#FA4A0C]  font-bold '>Create an account</h3>
                        <h2 className='font-bold text-3xl mt-2 mb-2'>Create/login to an existing <br />
                            account to get started</h2>
                        <h4>An account is created with your email <br />
                            An account is created with your email
                            and a desired password</h4>
                   </div>
                
                     
              
            </div>
        </div>
    );
};

export default Hero1;