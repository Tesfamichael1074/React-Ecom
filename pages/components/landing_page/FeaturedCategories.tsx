/* eslint-disable @next/next/no-img-element */



import React from 'react'

function FeaturedCategories() {

    const categories = [
        "https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?cs=srgb&dl=pexels-marcus-herzberg-1058276.jpg&fm=jpg",
        "https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7535059/pexels-photo-7535059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/5336701/pexels-photo-5336701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4947353/pexels-photo-4947353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  return (
    <div className=" my-4">
          <div className="text-lg mt-5 font-sans ml-4">Featured Categories</div>
          <div className="flex flex-row flex-wrap mx-12">
              {
                categories.map((val, idx) => {
                  return <div style={{'backgroundImage': `url(${val})`}} key={idx} className=" text-transparent hover:text-gray-800 hover:bg-white/70 bg-white/0 bg-cover bg rounded-full hover:scale-105 hover:cursor-pointer w-60 h-60  mx-3 my-3 border-8 border-white shadow-md flex flex-col-reverse">
                    <div className="h-24 pt-2 uppercase justify-center text-sm text-inherit font-bold bg-inherit rounded-b-full">
                        <div className="text-center">Category Name</div>
                        <div className="text-xs text-gray-800 text-inherit font-normal font-light lowercase mx-8 text-center">discover more on wide rage of products</div>
                    </div>
                  </div>
                })
              }
          </div>
        </div>
  )
}

export default FeaturedCategories