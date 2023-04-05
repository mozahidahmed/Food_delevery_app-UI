import React from 'react';

const FoodForEveryone = () => {
    return (
        <div className='py-6 '>


            <h1 className='text-[#FA4A0C]    text-3xl font-bold ms-6 mb-2'>My Profile</h1>
            <div className="grid justify-center bg-[#FA4A0C]  items-center py-6">
                <div className="p-5">
                    <div className="">
                        <img src="https://i.ibb.co/JnCHSz7/Group-3.png" className='bg-white rounded-full p-2' alt="" />
                    </div>
                    <h1 className='text-3xl lg:text-start text-center font-bold text-white'>Food for
                        Everyone</h1>

                    <div className="flex mt-6 sm:justify-center">
                        <img className="w-[140px]" src="https://i.ibb.co/MSKmCj8/Toy-Faces-Tansparent-BG-49.png" alt="" />
                        <img className="w-[140px]" src="https://i.ibb.co/Fn9hNRW/Toy-Faces-Tansparent-BG-29.png" alt="" />
                    </div>


                    <button className='btn  text-[#FA4A0C]  font-bold bg-white hover:bg-white mt-6 rounded-full w-full'>Add to cart</button>


                </div>

            </div>


        </div>
    );
};

export default FoodForEveryone;