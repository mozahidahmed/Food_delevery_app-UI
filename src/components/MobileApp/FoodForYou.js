import React from 'react';

const FoodForYou = () => {
    return (
        <div>
            <h1 className='text-[#FA4A0C] text-3xl font-bold ms-6'>FoodForYou</h1>
            <div className="grid justify-center items-center py-6 px-6">
                <div className="flex justify-between w-[400px] px-6">
                        <img src="https://i.ibb.co/9WBKdSw/Vector-11.png" alt="" />
                    <img src="https://i.ibb.co/KD1s8w3/shopping-cart-1.png" alt="" />
                </div>
                <h1 className='text-3xl font-bold mt-6 px-6'>Delicious <br /> food for you</h1>

                <div className="flex gap-2 mt-6 hover:bg-[#FA4A0C] rounded-full p-4 px-6">
                    <img src="https://i.ibb.co/D93dcwy/Vector-12.png" alt="" />
                    <h1>Search</h1>
                </div>
               
               <div className="flex gap-12 mt-6  mb-6 px-6 font-bold">
                    <h1 className='text-[#FA4A0C]'>Foods</h1>
                    <h1>Drinks</h1>
                    <h1>Snacks</h1>
                    <h1>Sauce</h1>
               </div>
 
               <div className=" mt-16 rounded-[20px]  grid justify-center shadow-xl">
                    <img src="https://i.ibb.co/mGy8H96/Mask-Group.png" className='mt-[-50px]' alt="" />
                    <div className="py-6">
                        <h1 className='font-bold text-2xl text-center'>A good Product</h1>
                        <h1 className='text-[#FA4A0C] font-bold text-center'>    N1,900</h1>
                    </div>
                
               </div>

                <div className="flex gap-6 mt-6 px-6 ">
                    <img src="https://i.ibb.co/9wwKZcS/heroicons-solid-home.png"      alt="" />
                    <img src="https://i.ibb.co/9wwKZcS/heroicons-solid-home.png"      alt="" />
                    <img src="https://i.ibb.co/9wwKZcS/heroicons-solid-home.png"      alt="" />
                    <img src="https://i.ibb.co/9wwKZcS/heroicons-solid-home.png"      alt="" />

              </div>
             </div>
        </div>
    );
};

export default FoodForYou;