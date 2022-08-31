




import { Rating } from 'flowbite-react'
import React from 'react'
import FeaturedCategories from './FeaturedCategories'
import FeaturedProducts from './FeaturedProducts'
import LandingPageCarosule from './LandingPageCarosule'

const LandingPage = () => {
  return (
    <div className='flex flex-col'>
        <LandingPageCarosule />
        <FeaturedProducts />
        <FeaturedCategories />
    </div>
  )
}

export default LandingPage