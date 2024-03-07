import React from 'react'

const NavBar = () => {
  return (
    <div className='px-4 py-6 flex justify-between items-center bg-white shadow-[0px_25px_20px_-20px_#edf2f7,0px_3px_8px_0px_#00000024] mb-5'>
        <div className='ms-12'>
            <img src="./images/logo.svg" alt="" className='w-[110px]'/>
        </div>
        <div className='me-5'>
            <ul className='lg:flex items-center text-center'>
                <li className='mx-2 text-xl font-semibold'><a href="#!">Crypto Taxes</a> </li>
                <li className='mx-2 text-xl font-semibold'><a href="#!">Free Tools</a> </li>
                <li className='mx-2 text-xl font-semibold'><a href="#!">Resource Center</a> </li>
                <li className='lg:ms-10 text-xl font-semibold border py-2 px-6 bg-[#0052fe] text-white rounded-xl'><a href="#!">Get Started</a> </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar