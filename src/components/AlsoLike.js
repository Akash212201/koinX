import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import LikeCard from './LikeCard';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

//function for left arrow
const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <button className='flex justify-center items-center absolute top-1/2 -right-3 rounded-[50%] lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] bg-white z-10'>
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
      <button className='flex justify-center items-center absolute top-1/2 -left-4 rounded-[50%] lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] bg-white z-10'>
        < IoIosArrowBack className="text-3xl" />
      </button>
    </div>
  )
}
const AlsoLike = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    //function to fetch data from api
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const coinsData = await response.json();
        const coins = coinsData.coins;
        setData(coins);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div className='bg-white lg:px-16 px-4 lg:py-28 py-4'>
      <h1 className='text-3xl font-bold mb-4'>You May Also Like</h1>
      <div className="slider-container mb-5">
        <Slider {...settings}>
          {
            data && data.map((coin, idx) => (
              <LikeCard key={idx} name={coin.item.name} amount={coin.item.data.price} cover={coin.item.small} graph={coin.item.data.sparkline} />
            ))

          }
        </Slider>
      </div>
      <h1 className='text-3xl font-bold mb-4 mt-10'>Trending Coins</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {
            data && data.map((coin, idx) => (
              <LikeCard key={idx} name={coin.item.name} amount={coin.item.data.price} cover={coin.item.small} graph={coin.item.data.sparkline} />
            ))

          }
        </Slider>
      </div>
    </div>
  )
}

export default AlsoLike
