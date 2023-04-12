import React from 'react';

const NotHistoryYet = () => {
    return (
        <div className="mt-6">
            <div className="grid  justify-center p-6">

                <div className="flex justify-between ">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>History</h1>
                </div>
                <div className="grid mt-12 justify-center">
                    <img src="https://i.ibb.co/ZJSktMD/Vector-13.png" alt="" />
                </div>

                <div className="grid mt-12 justify-center ">
                    <h1 className='text-3xl font-bold text-center'> No history yet</h1>
                    <p>Hit the orange button down
                        below to Create an order
                    </p>
                </div>

                <div className="grid mt-12  w-full">
                    <button className='btn bg-[#FA4A0C] rounded-full'>Start odering</button>
                </div>



            </div>
        </div>




    );
};

export default NotHistoryYet;