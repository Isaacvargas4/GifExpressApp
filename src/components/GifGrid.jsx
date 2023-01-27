
import React from 'react'

export const GifGrid = ({ category }) => {

    const  getGifs = async()=>{

        const url = `https://api.giphy.com/v1/gifs/search?api_key=duVcCkCjnCeO587fEuw0xsn2054ne95i&q=${category}&limit=20`
        const resp = await fetch(url) 
        const { data } = await resp.json();
        console.log(data)
    }

    getGifs();
    

  return (
    <>
    <div key= { category } >
                        <h3> { category } </h3>
                        <li> { category } </li>
                    </div>
    </>
  )
}
