import React, { useEffect } from 'react'
import phil1 from '../assets/phi1.png'
import phil2 from '../assets/phil2.png'
import phil3 from '../assets/phil3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
        });
    }, [])

    return (
        <>
            <section className='w-full bg-red-500 py-20 z-10'>
                <h1 data-aos="zoom-in" data-aos-delay="200" className='text-white md:text-6xl text-5xl font-semibold text-center pb-32'>OUR SERVICES</h1>
            </section>
            <section id='services'>
                <div className='w-full flex flex-col justify-center items-center bg-blue-900 h-fit'>
                    <div className='md:w-[85%] w-full mx-auto flex md:flex-row flex-col justify-center items-start md:gap-6 gap-20 md:p-20 p-10 mt-[-200px] z-20'>
                        <div data-aos="slide-up" data-aos-delay="400" className='flex flex-col justify-center items-center gap-6'>
                            <img src={phil1} alt="image" width={300} height={300} />
                            <h1 className='text-4xl text-white font-semibold'>Bodybuilding</h1>
                            <p className='text-lg text-slate-300 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt quasi at cupiditate provident. Delectus.</p>
                            <button className='px-6 py-3 bg-red-500 text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer'>VIEW MORE</button>
                        </div>
                        <div data-aos="slide-up" data-aos-delay="600" className='flex flex-col justify-center items-center gap-6'>
                            <img src={phil2} alt="image" width={300} height={300} />
                            <h1 className='text-4xl text-white font-semibold'>Powerlifting</h1>
                            <p className='text-lg text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam nobis earum impedit eligendi mollitia?</p>
                            <button className='px-6 py-3 bg-red-500 text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer'>VIEW MORE</button>
                        </div>
                        <div data-aos="slide-up" data-aos-delay="800" className='flex flex-col justify-center items-center gap-6'>
                            <img src={phil3} alt="image" width={300} height={300} />
                            <h1 className='text-4xl text-white font-semibold'>Yoga</h1>
                            <p className='text-lg text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ex modi eos sequi autem sunt.</p>
                            <button className='px-6 py-3 bg-red-500 text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer'>VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Services