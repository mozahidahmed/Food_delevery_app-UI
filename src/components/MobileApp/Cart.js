import React from 'react';

const Cart = () => {
    return (
        <div>

            <div className="grid justify-center items-center py-6">
                <div className="flex justify-self-auto gap-4 mb-6 w-[400px] px-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>cart</h1>
                </div>
                <h1 className='font-bold text-center'>swipe on an item to delete</h1>
                <div className="shadow-xl flex justify-center mt-6">
                    <img className='w-[120px]' src="https://i.ibb.co/mGy8H96/Mask-Group.png" alt="" />
                    <div className="">
                        <h1 className='text-2xl font-bold'>Veggie tomato mix</h1>
                        <div className="flex  gap-12">
                            <p className=''>Veggie tomato mix</p>
                            <p className='bg-[#FA4A0C] rounded-xl px-5 mt-6'>+ P -</p>
                        </div>

                    </div>
                </div>
                <div className="shadow-xl flex justify-center mt-6">
                    <img className='w-[120px]' src="https://i.ibb.co/mGy8H96/Mask-Group.png" alt="" />
                    <div className="">
                        <h1 className='text-2xl font-bold'>Veggie tomato mix</h1>
                        <div className="flex  gap-12">
                            <p className=''>Veggie tomato mix</p>
                            <p className='bg-[#FA4A0C] rounded-xl px-5 mt-6'>+ P -</p>
                        </div>

                    </div>
                </div>

                <div className="flex items-center">
                    <div className="shadow-xl flex justify-center mt-6">
                        <img className='w-[120px]' src="https://i.ibb.co/mGy8H96/Mask-Group.png" alt="" />
                        <div className="">
                            <h1 className='text-2xl font-bold'>Veggie tomato mix</h1>
                            <div className="flex  gap-12">
                                <p className=''>Veggie tomato mix</p>
                                <p className='bg-[#FA4A0C] rounded-xl px-5 mt-6'>+ P -</p>
                            </div>

                        </div>
                    </div>

                    <img className='bg-[#FA4A0C] rounded-full h-[40px] w-[40px] p-2 mt-6' src="https://i.ibb.co/8MFNyzq/heart-1.png" alt="" />
                   
                </div>
                <button className='btn mt-12 bg-[#FA4A0C] hover:bg-[#FA4A0C]  rounded-full w-full'>Complete order</button>

                
        </div>
        </div>
    );
};

export default Cart;