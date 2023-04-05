import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <h1 className='text-[#FA4A0C] text-3xl font-bold ms-6 mb-2'>My Profile</h1>
            <div className="grid justify-center items-center py-6">
                <div className="flex justify-self-auto gap-4 mb-6 w-[400px] px-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>My Profile</h1>
                </div>
                <h1 className='font-bold px-6'>Information</h1>
                <div className="flex gap-6 mt-6 px-6 shadow-xl rounded-xl p-4">
                    <img src="https://i.ibb.co/9TFwL6Z/Rectangle-6.png" alt="" />
                    <div className="">
                        <h1 className='font-bold text-2xl'>Marvis Ighedosa</h1>
                        <p>Lorem, ipsum dolor sit amet <br />
                            Lorem, ipsum dolor sit amet <br />
                        </p>
                    </div>
                </div>
                <h1 className='font-bold px-6 mt-6'>Payment Method</h1>


                <div className="rounded-xl shadow-xl">
                    <div className="flex gap-6 mt-6 px-6  items-center  p-4">
                        <img className="h-[10px]" src="https://i.ibb.co/GJ2GxZV/Ellipse-8.png" alt="" />
                        <img className='bg-[#FA4A0C] rounded-xl p-6' src="https://i.ibb.co/v1hkm3r/bi-credit-card-2-front-fill.png" alt="" />
                        <h1 className='font-bold'>Card</h1>
                    </div>
                    <hr />
                    <div className="flex gap-6 mt-6 px-6   items-center  p-4">
                        <img className="h-[10px]" src="https://i.ibb.co/Jxzn9cq/Ellipse-7.png" alt="" />
                        <img className='bg-[#EB4796] rounded-xl p-6' src="https://i.ibb.co/hXRCmPh/dashicons-bank.png" alt="" />
                        <h1 className='font-bold'>Bank account</h1>
                    </div>
                 
                    <div className="flex gap-6 mt-6 px-6 items-center  p-4">
                        <img className="h-[10px]" src="https://i.ibb.co/Jxzn9cq/Ellipse-7.png" alt="" />
                        <img className='bg-[#0038FF] rounded-xl p-6' src="https://i.ibb.co/TY36P93/cib-paypal.png" alt="" />
                        <h1 className='font-bold'>Paypal</h1>
                    </div>
               </div>
                <button className='btn bg-[#FA4A0C] hover:bg-[#FA4A0C] mt-6 rounded-full w-full'>Updatet</button>   


            </div>
        </div>
    );
};

export default MyProfile;