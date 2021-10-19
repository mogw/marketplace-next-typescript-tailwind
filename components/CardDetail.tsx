import React from 'react'
import { Card } from '../interfaces'

type Props = {
  card: Card
}

const CardDetailComponent = ({ card }: Props) => (
  <div className="p-2 md:flex md:justify-around">
    <div className="flex flex-col w-full p-4 md:w-5/12">
      <img src={card.url} alt="Card" className="w-full rounded-md" />
      <div className="flex justify-around p-2 mt-2 text-white bg-gray-800 rounded-md">
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
    </div>
    <div className="flex flex-col w-full p-4 md:w-6/12">
      <div className="text-3xl font-bold text-white">Working On Air</div>
      <div className="mt-8 text-sm text-gray-400">{card.content}</div>
      <div className="flex items-center mt-8">
        <div className="mr-2 text-gray-400 text-md">Owned By</div>
        <img src={card.owner_avatar} className="w-16 h-16 mx-2 rounded-full" alt="Avatar" />
        <div className="font-semibold text-white text-md">{card.owner_name}</div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="text-gray-400 text-md">Current Price {card.cost}</div>
        <div className="text-gray-400 text-md">$500.89</div>
        <div className="text-gray-400 text-md">1 of {card.counts}</div>
      </div>
    </div>
  </div>
)

export default CardDetailComponent
