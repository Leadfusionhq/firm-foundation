import React from 'react'

function HomeCtaBanner() {
  return (
    <section className='py-8 px-8'>
        <div className='bg-[url(/images/cta-banner.png)] bg-no-repeat bg-cover py-16 md:px-12 px-8 flex flex-col items-center justify-center min-h-[60vh] rounded-[36px] max-w-[1200px] mx-auto'>
            <h2 className='md:text-5xl text-3xl font-bold md:max-w-[60%] leading-[1.2] text-white text-center' data-aos="zoom-in">Accelerate Your Sales with Verified Leads and Full Visibility</h2>
            <button className='text-[#fff] underline text-lg text-center mt-6' data-aos="zoom-in">LET&rsquo;S GET STARTED</button>
        </div>
    </section>
  )
}

export default HomeCtaBanner