'use client';

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../SliderCustomArrows/SliderCustomArrows';

function HomeServices() {
    const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
      responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };
  return (
    <section className='bg-[#306A640A] mb-[400px] md:py-28 py-12 px-8'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex md:flex-row flex-col md:gap-10 gap-4 mb-16 relative service-slider lg:pb-0 pb-[50px]' data-aos="fade-up">
                <div className='md:w-[23%] w-full lg:pb-[50px]'>
                    <h6 className='primary-color text-sm font-bold'>Services</h6>
                    <h3 className='font-bold md:text-4xl text-2xl text-[#000] leading-[1.2]'>Accelerate Your Business Today</h3>
                </div>
                <div className='md:w-[77%] w-full'>
                    <Slider {...settings}>
                        <div className='px-2 md:py-0 py-2 h-full'>
                            <div className='rounded-[15px] p-8 bg-white h-full'>
                                <Image src="/images/icons/dashboard.png" className='mb-6 max-w-[50px] max-h-[50px] object-contain' height={50} width={50} alt="Dashboard"/>
                                <p className='font-bold text-xl text-[#000] mb-2'>Smart Lead Dashboard</p>
                                <p className='font-light text-sm'>Real-time lead tracking, assignment, and filtering — all in one place.</p>
                            </div>
                        </div>
                        <div className='px-2 md:py-0 py-2 h-full'>
                            <div className='rounded-[15px] p-8 bg-white h-full'>
                                <Image src="/images/icons/leads.png" className='mb-6 max-w-[50px] max-h-[50px] object-contain' height={50} width={50} alt="Leads"/>
                                <p className='font-bold text-xl text-[#000] mb-2'>Verified Leads</p>
                                <p className='font-light text-sm'>Pay as you go - Only pay for leads as you receive them.</p>
                            </div>
                        </div>
                        <div className='px-2 md:py-0 py-2 h-full'>
                            <div className='rounded-[15px] p-8 bg-white h-full'>
                                <Image src="/images/icons/support.png" className='mb-6 max-w-[50px] max-h-[50px] object-contain' height={50} width={50} alt="Support"/>
                                <p className='font-bold text-xl text-[#000] mb-2'>Onboarding & Support</p>
                                <p className='font-light text-sm'>Friendly onboarding and dedicated support to help you scale from day one.</p>
                            </div>
                        </div>
                        <div className='px-2 md:py-0 py-2 h-full'>
                            <div className='rounded-[15px] p-8 bg-white h-full'>
                                <Image src="/images/icons/dashboard.png" className='mb-6 max-w-[50px] max-h-[50px] object-contain' height={50} width={50} alt="Dashboard"/>
                                <p className='font-bold text-xl text-[#000] mb-2'>Smart Lead Dashboard</p>
                                <p className='font-light text-sm'>Real-time lead tracking, assignment, and filtering — all in one place.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='rounded-[35px] bg-primary-color flex md:flex-row flex-col -mb-[400px]'>
                <div className='md:px-16 md:py-16 px-8 py-8 md:w-1/2 w-full text-white flex flex-col justify-center' data-aos="fade-right">
                    <h6 className='mb-2 font-bold text-sm'>Our Mission</h6>
                    <p className='mb-1'>At Lead Fusion, our mission is clear&#58;</p>
                    <p className='mb-1'>To help companies grow smarter, close faster, and scale sustainably.</p>
                    <p className=''>We&rsquo;re more than just a lead provider — we&rsquo;re your growth partner. With over 15 years of experience in the construction industry, we&rsquo;ve built a system that delivers verified, high-intent leads and real-time  management tools designed to supercharge your sales efforts. We fuse cutting-edge technology with hands-on support, so your team can focus on what truly matters: converting more leads and driving clean energy forward.</p>
                </div>
                <div className='md:w-1/2 w-full'>
                    <Image src='/images/our-mission.png' alt='Qualified Leads' height={600} width={600} className='md:rounded-bl-[0px] rounded-bl-[35px] rounded-ee-[35px] w-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeServices