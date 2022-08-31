/* eslint-disable @next/next/no-img-element */



import { Carousel } from 'flowbite-react'
import React from 'react'
import Image from 'next/image'

function LandingPageCarosule() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-none">
        <Carousel slideInterval={5000}>

                <img
                    src="https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?cs=srgb&dl=pexels-marcus-herzberg-1058276.jpg&fm=jpg"
                    alt="Picture of the author"
                    className=' rounded-none'
                    />

                <img
                    src="https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Picture of the author"
                    className=' rounded-none'
                    />

                <img
                    src="https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Picture of the author"
                    className=' rounded-none'
                    />
                <img
                    src="https://images.pexels.com/photos/7535059/pexels-photo-7535059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Picture of the author"
                    className=' rounded-none'
                    />
            
        </Carousel>
    </div>
  )
}

export default LandingPageCarosule