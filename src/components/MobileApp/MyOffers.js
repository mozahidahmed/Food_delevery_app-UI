import React from 'react';

const MyOffers = () => {
    return (
        <div>
            <h1 className='text-[#FA4A0C] text-3xl font-bold ms-6 mb-2'>My Offer</h1>

         

            <div className="grid  justify-center py-16 ">
                <div className="flex justify-between w-[400px] px-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    
                </div> 
                <h1 className='text-3xl font-bold ms-6 mb-2'>My Offer</h1>

                <div className="grid mt-12 justify-center py-16 px-6">
                    <h1 className='text-3xl font-bold text-center'> No Offer yet</h1>
                    <p>Hit the orange button down
                        below to Create an order
                    </p>
                </div>
            </div>



        </div>
    );
};

export default MyOffers;