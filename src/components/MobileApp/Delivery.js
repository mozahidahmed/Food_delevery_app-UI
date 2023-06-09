import React from 'react';

const Delivery = () => {
    return (
        <div>
            <div className="grid justify-center items-center p-6">
                <div className="flex justify-self-auto gap-4 mb-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>Delivery</h1>
                </div>
                <h1 className='font-bold'>Information</h1>
                <div className="flex gap-6 mt-6 px-6 shadow-xl rounded-xl p-6">
                  
                    <div className="">
                        <h1 className='font-bold text-2xl'>Marvis Ighedosa</h1>
                        <p className='mt-2 mb-2'>Lorem, ipsum dolor sit amet jsdgfhskdgfh <br />
                            Lorem, ipsum dolor sit amet <br />
                        </p>
                        <hr />
                        <p className='font-bold mt-2'>+234 9011039271</p>
                    </div>
                </div>
                <h1 className='font-bold  mt-6'>Payment Method</h1>


                <div className="rounded-xl shadow-xl">
                    <div className="flex gap-6 mt-6 items-center  p-6">
                        <img className="h-[10px]" src="https://i.ibb.co/GJ2GxZV/Ellipse-8.png" alt="" />
                        <h1 className='font-bold'>Door delivery</h1>
                    </div>
                    <hr />
                    <div className="flex gap-6 mt-6   items-center  p-6">
                        <img className="h-[10px]" src="https://i.ibb.co/Jxzn9cq/Ellipse-7.png" alt="" />
                        <h1 className='font-bold'>Pick up</h1>
                    </div>

                  

                </div>
                <div className="flex justify-between font-bold mt-6">
                    <h1>Total</h1>
                    <h1>$23,000</h1>
                </div>
                <button className='btn bg-[#FA4A0C] hover:bg-[#FA4A0C] mt-6 rounded-full w-full'>UpdatProceed to paymentet</button>


            </div>
        </div>
    );
};

export default Delivery;