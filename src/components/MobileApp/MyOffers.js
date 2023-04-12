import React from 'react';

const MyOffers = () => {
    return (
        <div className='mt-6'>
          
            <div className="grid  justify-center p-6 ">
                <div className="flex justify-between">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    
                </div> 
                <h1 className='text-2xl font-bold ms-6 mt-2'>My Offer</h1>
                <div className="grid mt-12 justify-center">
                    <img src="https://i.ibb.co/SJ5y6bR/feather-search.png" alt="" />
                </div>

                <div className="grid mt-16 justify-center">
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