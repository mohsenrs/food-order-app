import React from 'react'
import './header.scss'
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className='main-image'>
        <img src={mealsImg} alt='meals' />
      </div>
    </>
  )
}

export default Header
