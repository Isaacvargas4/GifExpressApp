

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const animes = ['One Pounch']

    const [Category, setCategory] = useState(animes)

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





// import { useState } from "react"

// export const GifExpertApp = () => {

//     let animes = ['valorant', 'naruto']

//     const [categories, setCategories] = useState(animes)

//     const addCategory = ()=>{
//         console.log('i am working')
//         setCategories([...categories, 'fortnite'])
//     }

//   return (
    
//     <>
//     {/* titulo */}
//     <h1>Gif Expert App</h1>


//     {/* Input */}


//     {/* List of Gifs */}

//     <button onClick={addCategory} >
//         Add other category
//     </button>

//     <ol>

//         {categories.map((category, index)=>{
//             return <li key={index} > {category} </li>
//         })}
        
//     </ol>


//     {/* Gif Items */}


//     </>
//   )
// }
