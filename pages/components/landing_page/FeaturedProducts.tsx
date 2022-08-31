


import { Rating } from 'flowbite-react'
import React from 'react'

function FeaturedProducts() {
  return (
    <div className="">
          <div className="text-lg mt-5 font-sans ml-4">Featured Products</div>
          <div className="flex flex-row flex-wrap mx-12">
              {
                Array.from(Array(12).keys()).map((val, idx) => {
                  return <div key={idx} className=" hover:scale-105 hover:cursor-pointer w-60 h-72  mx-3 my-3 rounded-lg border-8 border-white shadow-md">
                            <div className="image h-48 rounded-lg bg-green-100"> </div>

                            <div className="flex mx-1 mt-2 justify-between">
                              <div className="title font-mono text-sm font-bold text-gray-500 hover:text-teal-500 hover:font-extrabold"> Product Name {idx}</div>
                              <div className="font-sans flex text-sm">
                                <Rating size='sm'>
                                  <Rating.Star  />
                                </Rating>
                                2.3
                              </div>
                            </div>
                            <div className="supplier text-teal-500 text-xs mx-1 font-light">
                              Supplier Name
                            </div>
                            <div className="price mx-1 font-sans text-sm mt-2 font-bold text-gray-500 ">
                              $235
                            </div>
                  </div>
                })
              }
          </div>
        </div>
  )
}

export default FeaturedProducts