import React, { useState } from 'react'

export default function Form({handleAdd}) {


  const [newFruit,setNewFruit]=useState('')


 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Copy du sttate
    // const fruitsCopy=[...fruits]
  // Manipulation de la copy du state
  const id = new Date().getTime();
  const nom=newFruit;
  // fruitsCopy.push({id,nom})
  const fruitToAdd={id, nom};
  // Modifier le state par son seter dédié
  handleAdd(fruitToAdd)
  setNewFruit("");
  };




  


  const handleChange=(event)=>{
    setNewFruit(event.target.value)
  }

  return (
    <div>
       <form action='submit' onSubmit={handleSubmit}>
      <input 
      value={newFruit}
       type='text'
       placeholder='Ajouter une fruit...'
      onChange={handleChange}
      />
      <button>Ajouter+</button>
     </form>
    </div>
  )
}
