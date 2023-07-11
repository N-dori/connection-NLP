import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { loadCart, removeProduct } from '../store/actions/cart.actions'
import { ProductList } from '../cmps/ProductList'
import { ProductCheckout } from '../cmps/ProductCheckout'
import { SignupPage } from './SignupPage'
import { userService } from '../services/userService'

export function ShoppingCart() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isUserlogged,setIsUserlogged]=useState(false)
  const [user,setUser]=useState(false)
  const [isSignupModalOpen,setIsSignupModalOpen]=useState(false)
  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const [sum, setSum] = useState(0)
  const [isfisrtLoad, setIsfisrtLoad] = useState(0)
  
  
  // const courses= loggdingUser

  useEffect(() => {
//we want to load user courses only one time (to sync between redux shopping cart with user cart)
//because it is create conflict between user cart to redux shopping cart
// and we dont want to make unnecessary http requests    
    if(isfisrtLoad === 0){
      setIsfisrtLoad(1)
      loadLoggedinUser()
      loadCourses()
    }
      culcTotalPrice()
      //in loggdingUer dependencies is from store 
  }, [JSON.stringify(shoppingCart),loggdingUser])
     
    const loadCourses = () => {

      dispatch(loadCart())  
      
    }
    const loadLoggedinUser = async () => {
         //this loggdingUer dependencies is from session 
      const loggdingUser = await userService.getLoggedinUser()
      setUser(loggdingUser)
    }

  const onRemove = (productId,userId) => {

    dispatch(removeProduct(productId,userId))
  
  }
  
  const culcTotalPrice = () => {
    let formatPrice = new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' })
    let total= 0
    if(shoppingCart){
      shoppingCart.forEach(product => {
        if(!product){return }
        total= total+ (+product.price)
        console.log('total',total);
      });
    } 
    else{
      return 
    }
  setSum(formatPrice.format(total.toFixed(2)))
}


const handelChekOut = () => {
 // here we check if logged in user is not default guest user that was signed-up as the app loads
  if(loggdingUser && loggdingUser._id !== '64abe02a8723e73efc4d4be8'){
    navigate(`/payment/${loggdingUser._id}`)
  }else{
    setIsSignupModalOpen(true)
    setIsUserlogged(true)

  }
  }
  const closeModal = () => {
    setIsSignupModalOpen(false)
  }
  return (

    <section className='product-list-container grid'>
      <header className='headline-wrapper flex-col'>
      <h1 className='headline'> עגלת הקניות</h1>
      <p className='total-courses'>{shoppingCart?shoppingCart.length+' קורסים בעגלת הקניות':''} </p>
      </header>
      <section className='product-list-wrapper'>
      {(shoppingCart /* ||(shoppingCart.length===0) */)?
        <ProductList onRemove={onRemove} shoppingCart={shoppingCart} loggdingUser={user}/>
        : 'shopping cart is empty'
      }
      </section>
        <ProductCheckout handelChekOut={handelChekOut} loggdingUser={user} sum={sum}/>

        { isUserlogged?
        isSignupModalOpen?<section className='shopping-cart-signup-modal-container'>
        <SignupPage closeModal={closeModal} shoppingCart={shoppingCart} isUserlogged={isUserlogged} setIsUserlogged={setIsUserlogged} from={'shopping-cart'}  />
         </section>:''
         :  ''
         }
    </section>
  )
}
