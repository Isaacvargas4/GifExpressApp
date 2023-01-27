


import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputCategory, setInputCategory] = useState('')

    const onSetInput = ({target})=>{
        setInputCategory(target.value)
    }

    const submitCategory = (event)=>{
        event.preventDefault();
        if(inputCategory.trim().length <= 1){
            return;
        }
        // setCategoryFromChild(categories => [ inputCategory ,...categories ])
        onNewCategory(inputCategory.trim())
        setInputCategory('')

    } 

  return (
    <form onSubmit={submitCategory} >
        <input 
            type="text"
            placeholder='Add new Category'
            value={inputCategory}
            onChange={onSetInput}

         />

    </form>
  )
}































// import React, { useState }  from 'react'


// export const AddCategory = ({setcategories}) => {

//     const [inputValue, setInputValue] = useState('')

//     const onChange = ({target})=>{

//         setInputValue(target.value)

//     }

//     const onSubmit = (event)=>{
//         event.preventDefault();
//         console.log(inputValue)
//         console.log(inputValue.length)
//         if(inputValue.trim().length <= 2){
//             return
//         }
//         setcategories(Category => [inputValue, ...Category])
//         setInputValue("")

//     }




//   return (
 
//     <form onSubmit={onSubmit}>
//         <input 
//             type="text"
//             placeholder='Search gifs'
//             onChange= {onChange}
//             value={inputValue}
//         />
//     </form>

//   )
// }
