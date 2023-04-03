import React from 'react';

const Banner2 = () => {
    return (
     <div className="py-6">
            <div className='h[619px]' style={{ backgroundImage: `url("https://i.ibb.co/LP3p0Dz/Rectangle-47.png")` }} >
                <div className="hero  ">
                    <div className="hero-content text-center py-24">
                        <div className="max-w-md">

                            <h1 className='font-bold text-2xl text-white mt-[7px] mb-[7px]'>
                                Why stay hungry when <br />
                                you can order form Bella Onojie
                            </h1>
                            <h4 className='text-white'>Download the bella onoje’s food app now on</h4>
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mt-6">
                                <button className="btn rounded-xl  text-white font-bold hover:bg-[#FA4A0C]  bg-[#FA4A0C]">Get Started</button>
                                <button className="btn btn-outline  text-white font-bold hover:bg-[#FA4A0C]  rounded-xl ">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
     </div>
    );
};

export default Banner2;