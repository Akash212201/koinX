import React from 'react'

const Tokenomics = () => {
  return (
    <div className='bg-white py-6 lg:px-8 px-2 rounded-xl mt-4'>
        <h1 className='text-[28px] font-bold mb-4'>Tokenomics</h1>
        
        <div className='mb-10'>
            <h1 className='text-2xl font-bold mb-2 text-[#4e4e4e]'>Initial Distribution</h1>
            <div className=" flex items-center">
               <div className='w-[200px] mb-2'>
                <img src="./images/graph.png" alt="" className='w-full' />
               </div>
              <div>
              <div className='flex items-center mb-6'>
                <p className='flex items-center text-xl'><span className='block bg-cyan-600 w-[15px] h-[15px] border rounded-[50%] me-3'></span> Crowdsale inverstors: 80% </p>
               </div>
              <div className='flex items-center mb-6'>
                <p className='flex items-center text-xl'><span className='block bg-yellow-400 w-[15px] h-[15px] border rounded-[50%] me-3'></span> Foundation: 20% </p>
               </div>
               
              </div>
            </div>
            <p className='text-lg font-medium text-[#4e4e4e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis 
                eveniet, repellendus explicabo minus consequuntur, fugiat corrupti 
                fugit quod exercitationem inventore tenetur molestiae iusto id eum 
                impedit, minima quia reiciendis amet quae culpa? Sit reprehenderit 
                illum ab odio enim velit ea ut qui itaque aspernatur illo ipsam minus, 
                impedit nobis tenetur aut voluptates mollitia iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, 
                numquam perferendis non nam molestiae odit! Porro saepe rerum beatae sunt?
            </p>
        </div>
    </div>
  )
}

export default Tokenomics