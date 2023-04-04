import React from 'react';

const ItemNotFound = () => {
    return (

            <div>
                <h1 className='text-[#FA4A0C] text-3xl font-bold ms-6 mb-2'>Item Not Found</h1>

                <div className="grid  justify-center">

                    <div className="flex justify-between w-[400px] px-6">
                        <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>Spicy chieckns</h1>
                    </div>
                    <div className="grid mt-12 justify-center  px-6">
                    <img src="https://i.ibb.co/SJ5y6bR/feather-search.png" alt="" />
                    </div>

                    <div className="grid mt-12 justify-center  px-6 py-6">
                        <h1 className='text-3xl font-bold text-center'>item not Found</h1>
                        <p>Hit the orange button down
                            below to Create an order
                        </p>
                    </div>

                    



                </div>



            </div>
   
    );
};

export default ItemNotFound;