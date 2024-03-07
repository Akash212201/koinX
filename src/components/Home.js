import React from 'react'
import Trending from './Trending'
import Team from './Team'
import Started from './Started'
import AboutBitCoin from './AboutBitCoin'
import Tokenomics from './Tokenomics'
import TradingViewWidget from './Chart'
import Performance from './Performance'
import Sentiment from './Sentiment'

const Home = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:px-14 px-2 gap-6'>
            <div className='lg:w-[65%]'>
                <TradingViewWidget/>
                <Performance />
                <Sentiment/>
                <AboutBitCoin />
                <Tokenomics />
                <Team />
            </div>
            <div className='lg:w-[33%]'>
                <Started />
                <Trending />
            </div>
        </div>
    )
}

export default Home