import React from 'react'
import { useRouter } from 'next/router'
import { Card } from '../interfaces'

type CardProps = {
  item: Card
}

const CardComponent = ({ item: card }: CardProps) => {
  const router = useRouter()
  
  return (
    <div 
      className="flex flex-col self-center p-6 m-4 transform bg-gray-700 rounded-lg cursor-pointer hover:translate-y-4"
      onClick={() => {
        router.push(`/cards/${card.id}`)
      }}
    >
      <img src={card.url} alt="Image" className="w-full rounded-md" />
      <div className="flex justify-around p-2 mt-2 text-white">
        <div className="flex flex-col items-center text-xs font-bold md:text-sm">
          <span className="px-1">DAYS</span>
          <span>{card.days}</span>
        </div>
        <div className="flex flex-col items-center text-xs font-bold md:text-sm">
          <span className="px-1">HOURS</span>
          <span>{card.hours}</span>
        </div>
        <div className="flex flex-col items-center text-xs font-bold md:text-sm">
          <span className="px-1">MINUTES</span>
          <span>{card.minutes}</span>
        </div>
        <div className="flex flex-col items-center text-xs font-bold md:text-sm">
          <span className="px-1">SECONDS</span>
          <span>{card.secondes}</span>
        </div>
      </div>
      <span className="flex p-2 mt-2 text-lg font-bold text-white">{card.owner_name}</span>
      <div className="flex items-center px-2">
        <img src={card.owner_avatar} alt="Avata" className="rounded-full max-w-16 max-h-16" />
        <span className="ml-2 font-bold text-white text-md">{card.owner_id}</span>
      </div>
      <div className="flex justify-between px-2 mt-2 font-semibold text-white text-md">
        <span>{card.cost}</span>
        <span>{card.counts} of 1</span>
      </div>
    </div>
  )
}

export default CardComponent
