import React from 'react'

function BannerHome() {
  return (
    <>
    <section className='bg-[url(/images/home-banner.png)] bg-no-repeat bg-cover py-16 px-8 flex items-center justify-center min-h-[85vh]'>
        <div className='max-w-[1200px] mx-auto' data-aos="fade-right">
            <h1 className='text-white md:max-w-[50%] mb-4 text-5xl'>Driving Growth, Expanding Opportunities</h1>
            <p className='text-white md:max-w-[60%] mb-4 text-lg font-light'>{`At Lead Fusion HQ, we specialize in connecting businesses with high-quality leads that turn prospects into loyal customers. Whether you're in roofing, solar, or any other industry, our proven strategies deliver targeted, actionable leads so you can focus on what you do best—growing your business.`}</p>
            <button className='bg-white border border-[#fff] px-6 py-3 text-[#000] rounded-[6px] hover:bg-[transparent] duration-300 hover:text-[#fff]'>EXPLORE MORE</button>
        </div>
    </section>
    </>
  )
}

export default BannerHome