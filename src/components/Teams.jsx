import React, { useEffect } from 'react'
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
import client3 from '../assets/client3.jpg'
import client4 from '../assets/client4.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Teams = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
        });
    }, [])

    return (
        <section id='team' className='w-[80%] mx-auto py-20 h-fit flex flex-col justify-center items-center gap-8'>
            <div id='gallery' className='flex md:flex-row flex-col justify-center items-center gap-6'>
                <img data-aos="slide-up" data-aos-delay="200" src={client1} alt="teams" width={300} height={300} className='w-[300px] h-[250px]' />
                <img data-aos="slide-up" data-aos-delay="400" src={client2} alt="teams" width={300} height={300} className='w-[300px] h-[250px]' />
                <img data-aos="slide-up" data-aos-delay="600" src={client3} alt="teams" width={300} height={300} className='w-[300px] h-[250px]' />
                <img data-aos="slide-up" data-aos-delay="800" src={client4} alt="teams" width={300} height={300} className='w-[300px] h-[250px]' />
            </div>

            <div id='social-links' className='flex justify-center items-center gap-6'>
                <FaFacebook data-aos="zoom-in" data-aos-delay="600" className='size-10 transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
                <FaInstagram data-aos="zoom-in" data-aos-delay="800" className='size-10 transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
                <FaTwitter data-aos="zoom-in" data-aos-delay="1000" className='size-10' />
            </div>

            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 data-aos="zoom-in" data-aos-delay="200" className='text-5xl text-red-500 font-extralight text-center'>OUR PERFECT <span className='font-bold'>TEAM</span></h1>
                <p data-aos="zoom-in" data-aos-delay="400" className='text-center text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a incidunt ullam <br></br>similique dignissimos distinctio nisi, deleniti adipisci nulla et?</p>
                <button data-aos="zoom-in" data-aos-delay="600" className='px-6 py-3 border-2 border-black font-semibold'>VIEW MORE</button>
            </div>
        </section>
    )
}

export default Teams