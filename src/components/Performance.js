import React, { useEffect, useState } from 'react';

const Performance = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Function to fetch trending coins data
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false&price_change_percentage=24h%2C7d&locale=en');
                const coinsData = await response.json();
                const coin = coinsData[0];
                console.log("coinData", coin);
                setData(coin);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-white pt-6 pb-10 px-8 rounded-xl mb-6'>
            <h1 className='text-[28px] font-bold mb-4'>Performance</h1>
            <div></div>
            <h1 className='text-xl font-bold mb-4'>Fundamentals <a href="#!" className='bg-[#a3a3a3] text-white text-[10px] rounded-[50%] px-2 py-1 mb-12'> !</a></h1>
            {data && (
                <div className='flex lg:flex-row flex-col justify-between items-center'>
                    <div className='lg:w-[45%] w-[100%]'>
                        <div className='flex justify-between items-center w-full mb-5'>
                            <p>BitCoin Price </p>
                            <p className="font-semibold">${data.current_price}</p>
                        </div>
                        <span className='block border w-full my-4'></span>
                        <div className='flex justify-between items-center w-full'>
                            <p>24h Low / 24h High </p>
                            <p className="font-semibold">${data.low_24h} / ${data.high_24h}</p>
                        </div>
                        <span className='block border w-full my-4'></span>
                        <div className='flex justify-between items-center w-full'>
                            <p>7d Low / 7d High </p>
                            <p className="font-semibold">$20</p>
                        </div>
                        <span className='block border w-full my-4'></span>
                        <div className='flex justify-between items-center w-full'>
                            <p>Trading Volume </p>
                            <p className="font-semibold">${data.total_volume}</p>
                        </div>
                        <span className='block border w-full my-4'></span>
                        <div className='flex justify-between items-center w-full mb-5'>
                            <p>Market Cap Rank </p>
                            <p className="font-semibold">#{data.market_cap_rank}</p>
                        </div>
                        <span className='block border w-full my-4'></span>
                    </div>
                    <div className='lg:w-[45%] w-[100%]'>
                        <div className='flex justify-between items-center w-full mb-5'>
                            <p>Market cap</p>
                            <p className="font-semibold">${data.market_cap}</p>
                        </div>
                        <span className='block border w-full my-4'></span>
                        <div className='flex justify-between items-center w-full mb-5'>
                            <p>All-Time High </p>
                            <p className='text-right'>
                                ${data.ath}
                                <span className={` ${data.ath_change_percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}> {data.ath_change_percentage}%</span>
                                <br />
                                {new Date(data.ath_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                            </p>
                        </div>
                        <span className='block border w-full my-4'></span>
                        <div className='flex justify-between items-center w-full mb-5'>
                            <p>All-Time Low </p>
                            <p className='text-right'>
                                ${data.atl}
                                <span className={` ${data.atl_change_percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}> {data.atl_change_percentage}%</span>
                                <br />
                                {new Date(data.atl_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                            </p>
                        </div>
                        <span className='block border w-full my-4'></span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Performance;
