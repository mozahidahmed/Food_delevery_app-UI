import React from 'react';

const NoInternetConnection = () => {
    return (
        <div className='mt-6'>
           
            <div className="grid  justify-center p-6">

               
                <div className="grid mt-12 justify-center">
                    <img src="https://i.ibb.co/b7795PK/eva-wifi-off-fill.png" alt="" />
                </div>

                <div className="grid mt-12 justify-center">
                    <h1 className='text-3xl font-bold text-center'> No Connection yet</h1>
                    <p>Hit the orange button down
                        below to Create an order
                    </p>
                </div>

                <div className="grid mt-12  w-full">
                    <button className='btn bg-[#FA4A0C] rounded-full'>Try again</button>
                </div>



            </div>



        </div>
    );
};

export default NoInternetConnection;