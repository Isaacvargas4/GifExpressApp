

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {


    const [Category, setCategory] = useState([])

    const setCategories = (newCategory)=>{
        const arrayLowerCase = Category.map(item=> item.toLowerCase())
        if(arrayLowerCase.includes(newCategory.toLowerCase())) return;
        setCategory([newCategory, ...Category])
    }

  return (
    <>
    <h1>
    GifExpertApp
    </h1>
    <AddCategory  
        onNewCategory={setCategories}/>
    {
        Category.map( ( category )=>(   
                <GifGrid 
                    key={category}  
                    category={category} />
            ))
    }
    </>
  )
}
