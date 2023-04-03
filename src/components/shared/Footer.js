import React from 'react';

const Footer = () => {
    return (
        <div className='py-6'>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 px-12 justify-center items-center">
                <div className="flex justify-center">
                    <img src="https://i.ibb.co/6DTF0TH/Bella-Olonje-logo-111-1.png" className="w-[206px] h-[101.76p]" alt="" />
                </div>
                <div className="flex gap-6 justify-center ">
                    <img src=" https://i.ibb.co/VTMcNVd/ant-design-twitter-outlined.png" alt="" />
                    <img src="  https://i.ibb.co/6bGvBfV/instagram.png" alt="" />
                    <img src="  https://i.ibb.co/QDYxsW0/ant-design-facebook-filled.png" alt="" />
                </div>
                <div className="flex justify-center">mozahid@gmail.com</div>
            </div>

        </div>
    );
};

export default Footer;