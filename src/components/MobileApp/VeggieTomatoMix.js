import React from 'react';

const VeggieTomatoMix = () => {
    return (
        <div>
            <div className="grid justify-center items-center p-6">
                <div className="flex justify-between gap-4 mb-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <img src="https://i.ibb.co/8MFNyzq/heart-1.png" alt="" />
             
                </div>

                <div className="mt-6 flex justify-center">
                    <img src="https://i.ibb.co/G21ghnc/Mask-Group-1.png" alt="" />
                </div>

                <h1 className='text-2xl font-bold text-center'>Veggie tomato mix</h1>
                <h1 className='text-[#FA4A0C] font-bold text-center mt-2'>    N1,900</h1>
                <div className="px-8 mt-6">
                    <h1 className='text-2xl font-bold '>Delivery info</h1>
                    <p>Delivered between monday aug and thursday <br /> 20 from 8pm to 91:32 pm</p>
                </div>

                <div className="px-8 mt-6">
                    <h1 className='text-2xl font-bold '>Delivery info</h1>
                    <p>Delivered between monday aug and thursday <br /> 20 from 8pm to 91:32 pm</p>
                </div>
                <button className='btn  bg-[#FA4A0C] hover:bg-[#FA4A0C] mt-6 rounded-full w-full'>Add to cart</button>   


        </div>
        </div>
    );
};

export default VeggieTomatoMix;