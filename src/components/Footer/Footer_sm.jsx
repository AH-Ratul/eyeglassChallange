import React from 'react';
import logo from "../../../public/Logo.png";
import { allIcons } from '../../data/All-Icons';

const Footer_sm = () => {
    const {instagram, linkedin, twitter} = allIcons;
    return (
        <main className='md:hidden absolute top-[6000px] pb-3'>
            {/* footer elements */}
            <section className='mx-7'>
                <div className='flex flex-col justify-center items-center text-textH1'>
                    <img src={logo} alt="logo" className='w-32'/>
                    <p className='text-balance text-center text-sm mt-6'>Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde</p>
                    <div className='flex gap-5  mt-2'>
                        <a href="#" className='border border-crm1 rounded-full text-base p-2'>{linkedin}</a>
                        <a href="#" className='border border-crm1 rounded-full text-base p-2'>{instagram}</a>
                        <a href="#" className='border border-crm1 rounded-full text-base p-2'>{twitter}</a>
                    </div>
                </div>
                <div className='mt-8 text-textH1 flex gap-[17px] justify-center items-center'>
                    {/* support */}
                    <div>
                        <h1 className='font-bold mb-5'>Support</h1>
                        <ul className='text-xs flex flex-col gap-2'>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Product FAQs</li>
                            <li>Company Support</li>
                            <li>Manage Account</li>
                        </ul>
                    </div>

                    {/* quick links */}
                    <div>
                    <h1 className='font-bold mb-5'>Quick Links</h1>
                    <ul className='text-xs flex flex-col gap-2'>
                            <li>About Us</li>
                            <li>Blog Post</li>
                            <li>Product Features</li>
                            <li>Company Info</li>
                            <li>Company Info</li>
                        </ul>
                    </div>

                    {/* community */}
                    <div>
                    <h1 className='font-bold mb-5'>Community</h1>
                    <ul className='text-xs flex flex-col gap-2'>
                            <li>Become an Affliate</li>
                            <li>Help Center</li>
                            <li>Product FAQs</li>
                            <li>Our Forums</li>
                            <li>Product API</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* copyright seciton */}
            <section>
                <div className='border-b my-6 border-b-crm1'></div>
                <div className='text-xs text-textH1 flex flex-col gap-2 justify-center items-center'>
                    <p>Copyright © 2023 All rights reserved by Eyeglass</p>
                    <div className='flex items-center gap-8'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Sevice</a>
                    </div>
                </div>
            </section>
            
        </main>
    );
};

export default Footer_sm;