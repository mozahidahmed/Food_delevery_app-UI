import React from 'react';

const Payment = () => {
    return (
        <div>
            <h1 className='text-[#FA4A0C] text-3xl font-bold ms-6 mb-2'>Payment</h1>
            <div className="grid justify-center items-center py-6">
                <div className="flex justify-self-auto gap-4 mb-6 w-[400px] px-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>Checkout</h1>
                </div>
                <h1 className='font-bold px-6 mt-6'>Payment method</h1>
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
                </div>
                <h1 className='font-bold px-6 mt-6'>Delivery method.</h1>
                <div className="rounded-xl shadow-xl">
                    <div className="flex gap-6 mt-6 px-6  items-center  p-4">
                        <img className="h-[10px]" src="https://i.ibb.co/GJ2GxZV/Ellipse-8.png" alt="" />
                        <h1 className='font-bold'>Card</h1>
                    </div>
                    <hr />
                    <div className="flex gap-6 mt-6 px-6   items-center  p-4">
                        <img className="h-[10px]" src="https://i.ibb.co/Jxzn9cq/Ellipse-7.png" alt="" />
                        <h1 className='font-bold'>Bank account</h1>
                    </div>
                </div>
                <div className="flex justify-between font-bold mt-6 px-2">
                    <h1>Total</h1>
                    <h1>$23,000</h1>
                </div>
                <button className='btn bg-[#FA4A0C] hover:bg-[#FA4A0C] mt-6 rounded-full w-full'>Updatet</button>


            </div>

            
        </div>
    );
};

export default Payment;