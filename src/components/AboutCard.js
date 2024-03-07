import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
const AboutCard = ({ item }) => {
  return (
    <div className={`${item.color} flex gap-4 p-4 rounded-lg`}>
      <div className='w-[35%] me-5'>
        <img src={item.cover} alt="" className='h-[135px] w-full rounded-lg' />
      </div>
      <div>
        <h2 className='my-4 text-2xl text-white font-bold'>{item.title}</h2>
        <div className='flex justify-center items-center w-max px-4 py-1 bg-white text-black mt-5 rounded-xl'>
          <button className='font-bold text-base me-2' >Check Now </button>
          <IoIosArrowRoundForward className='text-2xl font-bold' />
        </div>
      </div>
    </div>
  )
}

export default AboutCard