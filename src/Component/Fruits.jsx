import React from 'react'

export default function Fruits({fruitprop,handleprop}) {
  return (
   
      <li key={fruitprop.id}> {fruitprop.nom} 
        <button onClick={()=> handleprop(fruitprop.id)} className='btn-1'>X</button> 
      </li>
    
  )
}
