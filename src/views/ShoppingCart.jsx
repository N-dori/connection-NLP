import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { loadCart, removeProduct } from '../store/actions/cart.actions'
import { ProductList } from '../cmps/ProductList'
import { ProductCheckout } from '../cmps/ProductCheckout'

export function ShoppingCart() {
  const dispatch = useDispatch()
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const [sum, setSum] = useState(0)
  
  // const courses= loggdingUser
  const param = useParams()

  useEffect(() => {
      loadCourses()
      culcTotalPrice()
  }, [JSON.stringify(shoppingCart)])
     
    const loadCourses = () => {
      dispatch(loadCart())  
    }

  const onRemove = (productId) => {
    dispatch(removeProduct(productId))    
  }
  
  const culcTotalPrice = () => {
    let total= 0
    if(shoppingCart){
      shoppingCart.forEach(product => {
        if(!product.course){return }
        total= total+ (+product.course.price)
        console.log('total',total);
      });
    } 
    else{
      return 
    }
  setSum(total.toFixed(2))
}

  return (

    <section className='product-list-container grid'>
      <header className='headline-wrapper flex-col'>
      <h1 className='headline'>Shopping Cart</h1>
      <p className='total-courses'>{shoppingCart?shoppingCart.length+' Courses in cart':''} </p>
      </header>
      <section className='product-list-wrapper'>
      {shoppingCart ?
        <ProductList onRemove={onRemove} shoppingCart={shoppingCart} />
        : 'shopping cart is empty'
      }
      </section>
        <ProductCheckout loggdingUser={loggdingUser} sum={sum}/>


    </section>
  )
}
