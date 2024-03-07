import React from 'react';
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SentimentCard from './SentimentCard';
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineNewspaper } from "react-icons/hi";

//function for left arrow
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <button className='flex justify-center items-center absolute top-1/2 right-4 rounded-[50%] lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] bg-[#b0b0b0d6] z-10 text-white'>
                <IoIosArrowForward className="text-3xl" />
            </button>
        </div>
    )
}

//function for right arrow
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <button className='flex justify-center items-center absolute top-1/2 left-2 rounded-[50%] lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] bg-[#b0b0b0d6] z-10 text-white'>
                < IoIosArrowBack className="text-3xl" />
            </button>
        </div>
    )
}
const Sentiment = () => {
    const data = [
        {
            icon: <HiOutlineNewspaper/>,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque beatae ipsa voluptates dicta non?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sunt, maiores dolorum est quidem ut fugit natus, provident iste officiis illum recusandae culpa saepe! Alias debitis quisquam ullam iste architecto error reiciendis unde aliquid. Est officia modi architecto quae ratione.",
        },
        {
            icon: <FaArrowTrendUp/>,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque beatae ipsa voluptates dicta non?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sunt, maiores dolorum est quidem ut fugit natus, provident iste officiis illum recusandae culpa saepe! Alias debitis quisquam ullam iste architecto error reiciendis unde aliquid. Est officia modi architecto quae ratione.",
        },
        {
            icon: <HiOutlineNewspaper/>,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque beatae ipsa voluptates dicta non?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sunt, maiores dolorum est quidem ut fugit natus, provident iste officiis illum recusandae culpa saepe! Alias debitis quisquam ullam iste architecto error reiciendis unde aliquid. Est officia modi architecto quae ratione.",
        },
        {
            icon: <FaArrowTrendUp/>,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque beatae ipsa voluptates dicta non?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sunt, maiores dolorum est quidem ut fugit natus, provident iste officiis illum recusandae culpa saepe! Alias debitis quisquam ullam iste architecto error reiciendis unde aliquid. Est officia modi architecto quae ratione.",
        },
       
    ]
    
    let settings = {
        infinite: true, 
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-white pt-6 pb-10 lg:px-8 px-2 rounded-xl mb-6'>
            <h1 className='text-[28px] font-bold mb-2'>Sentiment</h1>
            <h1 className='text-xl font-bold my-6 text-[#404040]'>Key Events <a href="#!" className='bg-[#a3a3a3] text-white text-[10px] rounded-[50%] px-2 py-1 mb-12'>i</a></h1>

            <div className="slider-container mb-5">
                <Slider {...settings}>
                    {
                        data.map((item, idx) => (
                            <div key={idx} className=''>
                                <SentimentCard data={item} index={idx} />
                            </div>
                        ))

                    }
                </Slider>
            </div>

            <h1 className='text-xl font-bold my-6 text-[#404040]'>Analyst Estimates <a href="#!" className='bg-[#a3a3a3] text-white text-[10px] rounded-[50%] px-2 py-1 mb-12'>i</a></h1>
            <div className='flex items-center gap-8'>
                <div className='flex justify-center items-center border bg-[#dfdfdf81] lg:w-[150px] w-[125px] lg:h-[150px] h-[120px] rounded-[50%] text-4xl text-green-500 font-semibold'>76%</div>
                <div className='w-[70%]'>
                    <div className='flex items-center gap-5 mb-5'>
                        <span className='text-xl text-[#4b4b4b]'>Buy</span><span className='block bg-green-400 w-[76%] h-2 rounded-sm'></span><span className='text-xl text-[#4b4b4b]'>76%</span>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                        <span className='text-xl text-[#4b4b4b]'>Hold</span><span className='block bg-[#999999] w-[8%] h-2 rounded-sm'></span><span className='text-xl text-[#4b4b4b]'>8%</span>
                    </div>
                    <div className='flex items-center gap-6'>
                        <span className='text-xl text-[#4b4b4b]'>Sell</span><span className='block bg-red-500 w-[16%] h-2 rounded-sm'></span><span className='text-xl text-[#4b4b4b]'>16%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sentiment
