
import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {
  

  const {images, isLoading} = useFetchGifs(category);
  console.log({ isLoading})

  return (
    <>
        <h3>{category}</h3>
        
    <div className='card-grid'>
            { images.map((image) => (

                  <GifItem key={image.id} {...image} />
                    //  <img className='card' src={url}  />
            )) }
            
    </div>
      
    </>
  )
}
