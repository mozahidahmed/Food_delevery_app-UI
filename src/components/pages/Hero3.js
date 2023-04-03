import React from 'react';

const Hero3 = () => {
    return (
        <div className=''>

            <div className="grid  sm:grid-cols-1 lg:grid-cols-2 px-24 justify-center items-center">
                
                <div className="grid justify-center shadow-[50px 30px 150px 0px #2E040426]">
                    <img src="https://i.ibb.co/4mNhMp5/Rectangle-4.png" className="" alt='hjg' />
                </div>


               
                <div className="grid justify-center md:order-last  order-first">
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

export default Hero3;