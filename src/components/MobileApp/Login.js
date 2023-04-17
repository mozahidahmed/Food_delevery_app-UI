import React from 'react';

const Login = () => {
    return (
          <div className="grid justify-center mt-6">   
                    <div className="">
                        <div className="grid justify-center">
                            <img src="https://i.ibb.co/JnCHSz7/Group-3.png" className='w-[200px]' alt="" />
                        </div>
                        <div className="flex justify-between ">
                            <h1 className='text-2xl font-bold'>Login</h1>
                            <h1 className='text-2xl font-bold'>register</h1>
                        </div>
                    </div>


                    <div className="">
                        <div className="">
                            <h1>Email address</h1>
                            <input  className='font-bold'>mozahidwebmin11d10@gmail.com</input>
                            <img src="https://i.ibb.co/MMrrC3j/Line-1.png" alt="" />
                        </div>

                        <div className="mt-6">
                            <h1>Password</h1>
                            <h1 className='font-bold'>**********</h1>
                            <img src="https://i.ibb.co/MMrrC3j/Line-1.png" alt="" />
                        </div>

                        <div className="mt-6">
                            <h1 className='font-bold'>forget Password</h1>
                        </div>

                        <div className="mt-6">
                            <button className='btn bg-[#FA4A0C] rounded-full w-full'>Try To Login</button>
                        </div>
                    </div>          
          </div>

    
    );
};

export default Login;
