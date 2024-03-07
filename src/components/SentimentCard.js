import React from 'react';

const SentimentCard = ({ data, index }) => {
  const cardBgColors = ['#CFFAFE', '#DCFCE7']; 
    const iconBgColors = ['#0052fe', '#22c55e'];

    const cardBackgroundColor = cardBgColors[index % cardBgColors.length]; 
    const backgroundColor = iconBgColors[index % iconBgColors.length]; 

    return (
        <div className={`flex gap-2 rounded-lg py-3 px-2 lg:w-[400px] w-[330px]`} style={{ backgroundColor: cardBackgroundColor }}>
            <div className='flex relative items-center w-[100%] text-3xl text-white'>
                <p className={`absolute top-0 lg:p-3 p-2 rounded-[50%]`} style={{ backgroundColor }}>{data.icon}</p>
            </div>
            <div className=''>
                <h1 className='text-lg font-semibold'>{data.title}</h1>
                <p>{data.desc}</p>
            </div>
        </div>
    );
};

export default SentimentCard;
