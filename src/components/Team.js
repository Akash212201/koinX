import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
    const teamItems = [
        {
            cover: "./images/team1.jpeg",
            name: "John Smith",
            desg: "Designation Here",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae expedita, deleniti officiis cupiditate temporibus soluta tenetur corrupti velit aliquid quibusdam, officia ipsum, maxime consequuntur.",
        },
        {
            cover: "./images/team2.png",
            name: "Elina Williams",
            desg: "Designation Here",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae expedita, deleniti officiis cupiditate temporibus soluta tenetur corrupti velit aliquid quibusdam, officia ipsum, maxime consequuntur.",
        },
        {
            cover: "./images/team3.jpg",
            name: "John Smith",
            desg: "Designation Here",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae expedita, deleniti officiis cupiditate temporibus soluta tenetur corrupti velit aliquid quibusdam, officia ipsum, maxime consequuntur." ,
        },
    ]
  return (
    <div className='lg:px-6 px-2 bg-white my-4 rounded-xl py-6'>
        <h1 className='text-3xl font-bold mb-4'>Team</h1>
        <p className='mb-6 text-lg font-medium text-[#4e4e4e]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum nobis atque ut ratione id suscipit odio minus fugit accusantium, autem voluptas iure quos praesentium, nihil aperiam iusto.</p>
        {
            teamItems.map((item,idx) =>(
                <TeamCard key={idx} item={item} />
            ))
        }
    </div>
  )
}

export default Team