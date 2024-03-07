import React from 'react'

const TeamCard = ({item}) => {
  return (
    <div className='flex lg:flex-row flex-col items-center px-2 lg:px-8 py-3 bg-slate-300 mb-6 rounded-lg gap-4'>
        <div className='flex flex-col justify-center items-center lg:w-[30%] w-[35%] me-10'>
            <img src={item.cover} alt="" className='h-[115px] w-full rounded-lg'/>
            <p className='font-bold mt-2'>{item.name}</p>
            <span className='text-xs text-[#474747ae] font-bold'>{item.desg}</span>
        </div>
        <div className=''>{item.desc}</div>
    </div>
  )
}

export default TeamCard