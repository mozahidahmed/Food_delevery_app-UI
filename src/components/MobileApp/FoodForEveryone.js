import React from 'react';

const FoodForEveryone = () => {
    return (
            <div className='grid justify-center '>
                <div className="grid justify-between mt-6 bg-[#FA4A0C]  p-10">
                    <div className="">
                        <img src="https://i.ibb.co/JnCHSz7/Group-3.png" className='bg-white rounded-full p-2' alt="" />
                    </div>
                    <h1 className='text-3xl lg:text-start text-center font-bold text-white'>Food for
                        Everyone</h1>

                    <div className="flex mt-6 gap-6 sm:justify-center">
                        <img className="w-[140px]" src="https://i.ibb.co/MGMC8DT/Toy-Faces-Tansparent-BG-49-2x.png" alt="" />
                        <img className="w-[140px]" src="https://i.ibb.co/Fn9hNRW/Toy-Faces-Tansparent-BG-29.png" alt="" />
                    </div>
                    <button className='btn  text-[#FA4A0C]  font-bold bg-white hover:bg-white mt-12 rounded-full w-full'>Add to cart</button>

               </div>
                
      </div>
      
    
           
    );
};

export default FoodForEveryone;