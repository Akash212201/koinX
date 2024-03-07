import React, { useEffect, useState } from 'react'

const Trending = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    //function to fetch trending coins data
    const fetchData = async () => {
      try { 
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const coinsData = await response.json();
        const coins = coinsData.coins.slice(0, 3);
        setData(coins);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <div className='px-6 py-6 rounded-xl border bg-white mt-4'>
            <h1 className='text-2xl font-bold mb-4'>Trending Coins (24h)</h1>
            
            {
              data && data.map((coin,idx) => (
                <div key={idx} className='flex justify-between items-center mb-3 rounded-lg'>
                <div className='flex items-center'>
                    <img src={coin.item.small} alt="" className='me-2 w-[35px] border rounded-[50%] border-white'/>
                    <p className='font-semibold text-xl'>{coin.item.name} ({coin.item.symbol})</p>
                </div>
                <div className='bg-slate-200 px-2 text-green-500'>8.21%</div>
            </div>
              ))
            }
        </div>
    )
}

export default Trending