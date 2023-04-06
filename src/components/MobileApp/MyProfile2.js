import React from 'react';

const MyProfile2 = () => {
    return (
        <div>
            <div className="grid justify-center items-center py-6">
                <div className="flex justify-self-auto gap-4 mb-6 w-[400px] px-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>My Profile</h1>
                </div>
                <h1 className='font-bold px-6'>Information</h1>
                <div className="flex gap-6 mt-6 px-6 shadow-xl rounded-xl p-4">
                    <img className="w-[90px]" src="https://i.ibb.co/9TFwL6Z/Rectangle-6.png" alt="" />
                    <div className="">
                        <h1 className='font-bold text-2xl'>Marvis Ighedosa</h1>
                        <p>Lorem, ipsum dolor sit amet 
                          <p>+8801614853207</p>
                        </p>
                     <hr />
                        <p className='py-2'>Lorem, ipsum dolor sit amet <br />
                            Lorem, ipsum dolor sit amet <br />
                        </p>
                    </div>
                </div>
                <h1 className='font-bold px-6 mt-6'>Payment Method</h1>


              
                    <div className="flex rounded-xl shadow-xl gap-6 mt-6 px-6 items-center justify-between  p-4">
                    <h1 className='font-bold'>Orders</h1>
                        <img src="https://i.ibb.co/qN1NvdT/Vector-14.png" alt="" />

                    </div>
             
                    <div className="flex rounded-xl shadow-xl gap-6 mt-6 px-6 items-center justify-between  p-4">
                    <h1 className='font-bold'>Pending reviews</h1>
                        <img src="https://i.ibb.co/qN1NvdT/Vector-14.png" alt="" />

                    </div>
             
                    <div className="flex rounded-xl shadow-xl gap-6 mt-6 px-6 items-center justify-between  p-4">
                    <h1 className='font-bold'>Faq</h1>
                        <img src="https://i.ibb.co/qN1NvdT/Vector-14.png" alt="" />

                    </div>
             
                    <div className="flex rounded-xl shadow-xl gap-6 mt-6 px-6 items-center justify-between  p-4">
                    <h1 className='font-bold'>Help</h1>
                        <img src="https://i.ibb.co/qN1NvdT/Vector-14.png" alt="" />

                    </div>
             
                <button className='btn bg-[#FA4A0C] hover:bg-[#FA4A0C] mt-12 rounded-full w-full'>Help</button>


            </div>
        </div>
    );
};

export default MyProfile2;