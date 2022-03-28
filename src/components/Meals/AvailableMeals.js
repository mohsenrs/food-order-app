import React from 'react'
import Card from '../UI/Card'
import './availableMeals.scss'
import MealItem from './MealItem'

const DUMMY_MEALS = [
  { id: 'm1', name: 'sushi', description: 'sea food', price: 22.29 },
  { id: 'm2', name: 'schnitzel', description: 'german food', price: 16.5 },
  { id: 'm3', name: 'burger', description: 'burger food', price: 12.29 },
]

function AvailableMeals() {
  return (
    <section className='meals'>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              meal={meal}
            />
          ))}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
