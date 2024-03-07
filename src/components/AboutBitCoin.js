import React from 'react'
import AboutCard from './AboutCard'

const AboutBitCoin = () => {
    const aboutItem =[
        {
            cover: "./images/about.png",
            title: "Calculate your Profits",
            path: "",
            color: "aboutCard1",
        },
        {
            cover: "./images/about2.png",
            title: "Calculate your tax liability",
            path: "",
            color: "aboutCard2",
        },
    ]
  return (
    <div className='bg-white pt-6 pb-10 lg:px-8 px-2 rounded-xl'>
        <h1 className='text-[28px] font-bold mb-4'>About Bitcoin</h1>
        <h1 className='text-xl font-bold mb-4'>What is Bitcoin?</h1>
        <p className='text-lg font-medium text-[#4e4e4e]'>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
        <span className='block border border-[#cdcdcd] w-full my-4'></span>
        <h1 className='text-xl font-bold mb-4'>Lorem ipsum dolor sit amet.</h1>
        <p className='text-lg font-medium text-[#4e4e4e] mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quaerat a amet tempora beatae error sequi, nam consectetur omnis ipsa tempore doloremque, asperiores inventore iste eius deserunt enim provident odio, incidunt voluptatem. Vel, at vitae?</p>
        <p className='text-lg font-medium text-[#4e4e4e] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, amet nemo recusandae autem, esse reiciendis eaque debitis ratione aut cupiditate harum tempora maiores porro excepturi est enim error, aperiam blanditiis cum culpa perspiciatis hic. In sunt corporis harum enim itaque dignissimos explicabo omnis! Voluptatum consequatur molestias natus, repellendus id nam.</p>
        <p className='text-lg font-medium text-[#4e4e4e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod accusantium eaque, in dolores quia nobis, eos fugiat distinctio inventore molestias adipisci sit delectus! Magnam eum facilis voluptates praesentium, culpa ipsam molestiae excepturi saepe perspiciatis, voluptatum dolore, odit doloremque velit.</p>
        <span className='block border border-[#cdcdcd] w-full my-4'></span>
        <h1 className='text-[28px] font-bold mb-4'>Already Holding BitCoin?</h1>
        <div className='flex lg:flex-row flex-col justify-between items-center gap-8'>
        
        
       {
        aboutItem.map((item,idx)=>(
            <div key={idx} className='lg:w-[50%]'><AboutCard item={item}/></div>
        ))
       }
        </div>
        <span className='block border border-[#cdcdcd] w-full my-4'></span>
        <p className='text-lg font-medium text-[#4e4e4e]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam sequi a quasi molestiae quos sunt in repudiandae ipsa reprehenderit harum temporibus autem eveniet, reiciendis laudantium, nesciunt illo nobis expedita. Optio possimus ipsam quae omnis, expedita quam eos reprehenderit voluptas quasi?</p>
    </div>
  )
}

export default AboutBitCoin