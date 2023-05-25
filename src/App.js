import React, { useState } from 'react'
import Fruits from './Component/Fruits'
import Form from './Component/Form'

export default function App() {
  const [fruits,setFruits]=useState([

    {id:1,nom:'Mangue'},
    {id:2,nom:'Orange'},
    {id:3,nom:'Pamplemousse'},
    {id:4,nom:'Citron'},
    {id:5,nom:'Bannane'},
  ])
  const handleDelete=(id) =>{
    // Copy du sttate
    const fruitsCopy=[...fruits]
  // Manipulation de la copy du state
  const fruitsCopyUpdate=fruitsCopy.filter(fruit => fruit.id !==id)
  // Modifier le state par son seter dédié
  setFruits(fruitsCopyUpdate)

  }

  
 const handleAdd=(fruitToAdd)=>{
  // Copy du sttate
  const fruitsCopy=[...fruits]
  fruitsCopy.push(fruitToAdd)
  setFruits(fruitsCopy)
 }


  return (
    <div>
      <h1>Liste de Fruits</h1>
     <ul>
     {fruits.map((fruit)=>
     <Fruits fruitprop={fruit}  handleprop={handleDelete} />
      )}
     </ul>
    <Form handleAdd={handleAdd} />
    </div>
  )
}
