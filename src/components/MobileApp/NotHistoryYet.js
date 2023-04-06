import React from 'react';

const NotHistoryYet = () => {
    return (
        <div>
           
            <div className="grid  justify-center">

                <div className="flex justify-between w-[400px] px-6">
                    <img src="https://i.ibb.co/pX9Z1D2/chevron-left-1.png" alt="" />
                    <h1 className='font-bold '>History</h1>
                </div>
                <div className="grid mt-12 justify-center  px-6">
                    <img src="https://i.ibb.co/ZJSktMD/Vector-13.png" alt="" />  
                </div>

                <div className="grid mt-12 justify-center  px-6">
                    <h1 className='text-3xl font-bold text-center'> No history yet</h1>
                    <p>Hit the orange button down
                        below to Create an order
                        </p>
                </div>

                <div className="grid mt-12  w-full px-6 py-16">
                    <button className='btn bg-[#FA4A0C] rounded-full'>Start odering</button> 
                </div>



            </div>



        </div>
    );
};

export default NotHistoryYet;