import React from 'react';

const FoodForEveryone = () => {
    return (
        <div className='bg-[#FA4A0C] py-6 px-2'>
            
          <div className="">
                <img src="https://i.ibb.co/JnCHSz7/Group-3.png" className='bg-white rounded-full p-2' alt="" />
          </div>


          <div className="grid lg:grid-cols-2 sm:justify-center py-12 items-center">
              
                    <div className="">
                        <h1 className='text-6xl lg:text-start text-center font-bold text-white'>Food for
                            Everyone</h1>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <button className="btn rounded-full text-center mt-2 text-[#FF460A] font-bold hover:bg-white  bg-white">Get Started</button>
                        </div>
                    </div>

              

               <div className="flex mt-6 sm:justify-center">
                    <img className="w-[190px]" src="https://i.ibb.co/MSKmCj8/Toy-Faces-Tansparent-BG-49.png" alt="" />
                    <img className="w-[190px]" src="https://i.ibb.co/Fn9hNRW/Toy-Faces-Tansparent-BG-29.png" alt="" />
                </div>
                

          </div>





        </div>
    );
};

export default FoodForEveryone;