import React from 'react'
import Card from './Card'
import Image from 'next/image'

function CardItem({ image, title, description, liked, noOfLikes }: { image: string, title: string, description: string, liked: boolean, noOfLikes: number }) {
  return (
    <Card>
        <div className='flex gap-4'>
            <Image src={'/assets/images/user3.png'} width={80} height={4} alt={`${title} Profile Image`} className='!h-9 !w-9'/>
            <div className='flex flex-col gap-0'>
                <h3 className='font-semibold'>{title}</h3>
                <p className='text-sm text-[#676565]'>{description}</p>
            </div>
            <div className='flex flex-col items-center text-[#676565]'>
                <button title='Like'>
                    <i className='far fa-heart text-red-500'></i>
                </button>
                <p className='text-sm'>{noOfLikes}</p>
            </div>
        </div>
    </Card>
  )
}

export default CardItem
