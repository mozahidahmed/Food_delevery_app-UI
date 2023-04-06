import React from 'react';

const Navbar = () => {
    return (
        <div className='grid justify-center '>
           
            <div className="flex justify-between bg-[#FA4A0C]  gap-12">
            <div className="p-5">
                    <div className="flex gap-6 ">
                        <img src="https://i.ibb.co/gD5QkbW/gg-profile.png" alt="" />
                        <h1 className='font-bold text-white text-2xl' >Profile</h1>
                    </div>

                    <div className="flex gap-6 mt-12">
                        <img src="https://i.ibb.co/fNb9yHS/icons8-buy-1.png" alt="" />
                        <h1 className='font-bold text-white text-2xl'>orders</h1>
                    </div>

                    <div className="flex gap-6 mt-12">
                        <img src="https://i.ibb.co/KxB5z1F/ic-outline-local-offer.png" alt="" />
                        <h1 className='font-bold text-white text-2xl'>orders</h1>
                    </div>

                    <div className="flex gap-6 mt-12">
                        <img src="https://i.ibb.co/HpXsBwb/ic-outline-sticky-note-2.png" alt="" />
                        <h1 className='font-bold text-white text-2xl'>orders</h1>
                    </div>


                    <div className="flex gap-6 mt-12">
                        <img src="https://i.ibb.co/YPtVDQ4/whh-securityalt.pngg" alt="" />
                        <h1 className='font-bold text-white text-2xl'>orders</h1>
                    </div>
                    <div className="flex gap-2 mt-32 ">

                        <h1 className="text-2xl font-bold text-white">Sign-out</h1>
                        <img src="https://i.ibb.co/qYJHznK/Arrow-1.png" alt="" />
                    </div>



            </div>
            <div className="py-12">
                    <img src="https://i.ibb.co/92nt7Mv/image-10-1.png" alt="" />
            </div>
        </div>


            






        </div>
    );
};

export default Navbar;