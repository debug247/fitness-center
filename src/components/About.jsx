import React, { useEffect } from 'react'
import aboutimg from '../assets/about.jpg'
import { FaCheck } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import banner from '../assets/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
        });
    }, [])

    return (
        <>
            <section id='about' className='w-[75%] mx-auto md:py-20 py-10 flex md:flex-row flex-col jusitfy-between items-start gap-20'>
                <div className='md:w-[50%] w-full flex flex-col justify-center items-start gap-6'>
                    <h1 data-aos="zoom-in" data-aos-delay="" className=' text-red-600 md:text-7xl text-6xl font-semibold'>JOIN TODAY</h1>
                    <p data-aos="zoom-in" data-aos-delay="200" className='text-black text-2xl font-semibold'>Ready to take the next step? </p>
                    <p data-aos="zoom-in" data-aos-delay="400" className='text-lg text-slate-600 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium tempore quidem nihil beatae nobis aperiam pariatur eos asperiores error, libero magni ab. Ducimus explicabo nisi iste eos corporis impedit?</p>
                    <button data-aos="zoom-in" data-aos-delay="600" className='px-8 py-4 bg-blue-900 hover:bg-red-500 text-white font-semibold'>BOOK NOW</button>
                    <div data-aos="zoom-in" data-aos-delay="800" id='list-infos' className='flex md:flex-row flex-col justify-center md:items-center items-start gap-6 md:pr-10'>
                        <div>
                            <ul className='flex flex-col justify-center items-start gap-2'>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Access to locker rooms</span></li>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Access to training </span></li>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Classes & reservation</span></li>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Member guest privileges</span></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col justify-center items-start gap-2'>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Free team training/UXF </span></li>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Preferred member pricing on services</span></li>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Lorem ipsum dolor sit amet.</span></li>
                                <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className=' text-slate-600'>Lorem ipsum dolor sit amet.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full h-fit relative'>
                    <img data-aos="zoom-in" data-aos-delay="200" src={aboutimg} alt="about image" width={600} height={600} />
                    <div data-aos="slide-up" data-aos-delay="200" className='bg-red-500 md:w-[90%] w-full text-white flex flex-col justify-center items-start gap-4 md:p-8 p-6 absolute md:-left-[100px] md:right-[100px] md:bottom-[-180px] mt-8 z-10'>
                        <FaQuoteLeft className='md:size-14 size-10' />
                        <p className='md:text-3xl text-2xl'>The ability to help so many people reach their goals—it’s the most awesome experience I’ve ever had.</p>
                    </div>
                </div>
            </section>

            <section data-aos="zoom-in" data-aos-delay="200" id='banner' className='w-full md:h-[600px] h-[300px] flex justify-end items-end p-10 md:mt-24 bg-cover bg-center mt-[400px]' style={{ backgroundImage: `url(${banner})` }}>
                <h1 data-aos="slide-up" data-aos-delay="400" className='md:text-[150px] text-[50px] text-white font-bold'>MOVE!</h1>
            </section>
        </>

    )
}

export default About