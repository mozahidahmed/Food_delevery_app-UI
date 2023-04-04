import React from 'react';

const NoInternetConnection = () => {
    return (
        <div>
            <h1 className='text-[#FA4A0C] text-3xl font-bold ms-6 mb-2'>08. No Internet Connection</h1>

            <div className="grid  justify-center">

               
                <div className="grid mt-12 justify-center  px-6">
                    <img src="https://i.ibb.co/b7795PK/eva-wifi-off-fill.png" alt="" />
                </div>

                <div className="grid mt-12 justify-center  px-6">
                    <h1 className='text-3xl font-bold text-center'> No Order yet</h1>
                    <p>Hit the orange button down
                        below to Create an order
                    </p>
                </div>

                <div className="grid mt-12  w-full px-6 py-16">
                    <button className='btn bg-[#FA4A0C] rounded-full'>Try again</button>
                </div>



            </div>



        </div>
    );
};

export default NoInternetConnection;