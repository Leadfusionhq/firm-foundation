'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const faqs = [
    {
        question: "What types of leads do you provide?",
        answer: "We specialize in generating high-quality, verified leads for contractors, realtors, and other service professionals. Whether you're in home improvement, real estate, solar installation, or any other service industry, we connect you with prospects actively seeking your services."
    },
    {
        question: "How do you verify the leads?",
        answer: "We specialize in generating high-quality, verified leads for contractors, realtors, and other service professionals. Whether you're in home improvement, real estate, solar installation, or any other service industry, we connect you with prospects actively seeking your services."
    },
    {
        question: "How does your payment structure work?",
        answer: "We specialize in generating high-quality, verified leads for contractors, realtors, and other service professionals. Whether you're in home improvement, real estate, solar installation, or any other service industry, we connect you with prospects actively seeking your services."
    },
    {
        question: "How quickly can I start receiving leads?",
        answer: "We specialize in generating high-quality, verified leads for contractors, realtors, and other service professionals. Whether you're in home improvement, real estate, solar installation, or any other service industry, we connect you with prospects actively seeking your services."
    },
    {
        question: "Can I customize my lead criteria?",
        answer: "We specialize in generating high-quality, verified leads for contractors, realtors, and other service professionals. Whether you're in home improvement, real estate, solar installation, or any other service industry, we connect you with prospects actively seeking your services."
    },
    {
        question: "What support do you offer if I need help?",
        answer: "We specialize in generating high-quality, verified leads for contractors, realtors, and other service professionals. Whether you're in home improvement, real estate, solar installation, or any other service industry, we connect you with prospects actively seeking your services."
    },
];

function FaqHome() {
    const [activeIndex, setActiveIndex] = useState(0); // First item open by default
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className='md:py-28 py-12 px-8'>
            <div className='max-w-[1000px] mx-auto' data-aos="fade-up">
                <h2 className="md:text-4xl text-2xl text-center text-[#000] font-bold mb-8">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-[#01010117] overflow-hidden mb-4 rounded-[5px]"
                    >
                        <div
                            onClick={() => toggle(index)}
                            className="w-full text-left text-lg font-medium p-4 transition cursor-pointer flex justify-between items-center"
                        >
                            <p className='font-bold text-lg text-[#000]'>{faq.question}</p>
                            <span
                                className={`transition-transform duration-300 ${
                                    activeIndex === index ? 'rotate-180' : ''
                                }`}
                            >
                                <Image
                                    src="/images/icons/Vector-3.png"
                                    alt="Arrow"
                                    height={20}
                                    width={20}
                                />
                            </span>
                        </div>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="transition-all duration-500 ease-in-out overflow-hidden"
                            style={{
                                maxHeight:
                                    activeIndex === index
                                        ? contentRefs.current[index]?.scrollHeight + 'px'
                                        : '0px',
                            }}
                        >
                            <p className="px-4 pb-4 text-[14px]">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FaqHome;
