import React from 'react'
import './mealItem.scss'
import MealItemForm from './MealItemForm'

function MealItem({ meal }) {
  const price = `$${meal.price.toFixed(2)}`
  return (
    <li className='meal'>
      <div>
        <h3>{meal.name}</h3>
        <div className='description'>{meal.description}</div>
        <div className='price'>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}

export default MealItem
