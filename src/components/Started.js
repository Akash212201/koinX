import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
const Started = () => {
  return (
    <div className='rounded-xl justify-center items-center text-center bg-[#0052fe] text-white py-[3rem] lg:px-[2rem] px-[1rem]'>
        <h3 className='text-3xl mb-6 font-semibold'>Get Started with KoinX for FREE</h3>
        <h5 className=' text-base lg:px-8 px-6'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</h5>
        <div className='flex justify-center items-center mt-10'>
        <img src="./images/StartedImg.svg" alt="" />
        </div>
        <div className='lg:w-[65%] w-[75%] flex justify-center items-center mx-auto px-2 py-2 bg-white text-black mt-5 rounded-xl font-medium'>

        <button >Get Started for FREE </button><IoIosArrowRoundForward className='text-3xl'/>
        </div>
    </div>
  )
}

export default Started