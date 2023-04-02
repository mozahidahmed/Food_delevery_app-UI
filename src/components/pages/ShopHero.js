import React from 'react';

const ShopHero = () => {
    return (
        <div className='h-[486px]'>
            <h1 className='font-bold text-4xl text-center'> How the app works</h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 px-24  items-center">
            <div className="grid justify-center">
                    <img src="https://i.ibb.co/M8f3L5c/Rectangle-removebg-preview.png" alt='hjg' />
            </div>
                   
                 <div className="grid justify-center">
                   <div className="">
                        <h3 className='text-[#FA4A0C]  font-bold '>Create an account</h3>
                        <h2 className='font-bold text-3xl mt-2 mb-2'>Create/login to an existing <br />
                            account to get started</h2>
                        <h4>An account is created with your email <br />
                            An account is created with your email
                            and a desired password</h4>
                   </div>
                </div>  
                     
              
            </div>
        </div>
    );
};

export default ShopHero;