import React from 'react'
import './availableMeals.scss'

const DUMMY_MEALS = [
  { id: 'm1', name: 'sushi', description: 'sea food', price: 22.29 },
  { id: 'm2', name: 'schnitzel', description: 'german food', price: 16.5 },
  { id: 'm3', name: 'burger', description: 'burger food', price: 12.29 },
]

function AvailableMeals() {
  return (
    <section className='meals'>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li>{meal.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default AvailableMeals
