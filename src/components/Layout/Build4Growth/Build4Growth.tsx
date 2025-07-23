import React from 'react'
import Image from 'next/image'

function Build4Growth() {
  return (
    <section className='md:py-28 py-8 px-8 flex items-center'>
      <div className='flex md:flex-row flex-col gap-4 items-center justify-between max-w-[1200px] mx-auto w-full'>
        <div className='md:w-[60%] w-full' data-aos="fade-right">
          <h2 className='md:text-4xl text-2xl font-bold text-[#000] max-w-[400px] leading-[1.2] mb-2'>Built for Growth — From Lead to Close</h2>
          <p className='max-w-[400px]'>Lead Fusion is a performance-driven lead partner built exclusively for the contractor industry. With over 15 years of experience, we specialize in delivering high-converting leads and providing smart tools that help companies streamline their sales process — from first contact to final close.</p>
        </div>
        <div className='md:w-[40%] w-full relative'>
            <Image src="/images/Qualified-leads.png" alt="Qualified Leads" height={600} width={600} className="rounded-[25px] w-[85%]"/>
            <Image src="/images/Handshake.png" alt="Hand Shake" height={400} width={400} className="rounded-[30px] border-2 border-white absolute right-0 -bottom-[30px] w-[40%]" data-aos="zoom-in"/>
        </div>
      </div>
    </section>
  )
}

export default Build4Growth