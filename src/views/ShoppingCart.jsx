import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { imgService } from '../services/imgService'
import { courseService } from '../services/course.service'
import { addCart, loadCart } from '../store/actions/cart.actions'
import { ProductList } from '../cmps/ProductList'

export  function ShoppingCart() {
  const dispatch = useDispatch()
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const [courses, setCourses] = useState([])

  // const courses= loggdingUser
  const param = useParams()
  
  useEffect(() => {
    loadCourses()
    printShoppingCart()
  }, [])
  useEffect(() => {
    loadCourses()

    }, [shoppingCart])
    const loadCourses = () => {
      dispatch(loadCart())
           
  }
 const printShoppingCart = () => {
  setTimeout(() => {
    console.log('shoppingCart',shoppingCart);
    
  }, 2000);
 }
   

  return (
   
     <section  className='my-courses-list-container'>
      <h1>Shopping-Cart</h1>
      

{shoppingCart?

<ProductList shoppingCart={shoppingCart}/>
:'shopping cart is empty' 
}      
  

 </section>
  )
}
