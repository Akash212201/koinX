import React from 'react';

const LikeCard = ({ name, amount, cover, graph }) => {
  // Function to create a safe HTML string
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className='border lg:w-[275px] w-[160px] lg:h-[180px] h-[150px] bg-[#fff] p-4 rounded-xl'>
      <div className='flex gap-2 items-center'>
        <div className='lg:w-[35px] w-[30px]'>
          <img src={cover} alt='' className='w-full' />
        </div>
        <div className='lg:text-2xl text-lg'>{name}</div>
      </div>
      <h1 className='lg:text-2xl text-xl my-2 font-bold' dangerouslySetInnerHTML={createMarkup(amount)}></h1>
      <div className='flex justify-center items-center lg:w-[180px] w-[135px] lg:h-[80px] h-[35px] pb-1 mx-auto'>
        <img src={graph} alt='' className='w-full h-full' />
      </div>
    </div>
  );
};

export default LikeCard;
