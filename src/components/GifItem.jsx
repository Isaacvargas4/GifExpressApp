import React from 'react'

export const GifItem = ({title, url, id}) => {

  return (
    <>
    <div className='card' >
        <p className='card p' > {title}</p>
        <img className='card img' src={url} alt={title} />
    </div>
    </>
  )
}
