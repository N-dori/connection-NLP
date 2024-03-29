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
  const [beforeDiscount, setPriceBeforeDiscount] = useState(0)
  const [isfisrtLoad, setIsfisrtLoad] = useState(0)
  
  
  // const courses= loggdingUser

  useEffect(() => {
//we want to load user courses only one time (to sync between redux shopping cart with user cart)
//because it is create conflict between user cart to redux shopping cart
// and we dont want to make unnecessary http requests    
window.scrollTo(0,0)
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
      setTimeout(() => {
        console.log('shopping cart',shoppingCart);
      }, 2500);
      
    }
    const loadLoggedinUser = async () => {
         //this loggdingUer dependencies is from session 
         if(loggdingUser?._id === '64abe02a8723e73efc4d4be8'){
           setUser(loggdingUser)
         }else{
           const user = await userService.getLoggedinUser()
           setUser(user)
         }
      }
    

  const onRemove = (productId,userId) => {

    dispatch(removeProduct(productId,userId))
  
  }
  
  const culcTotalPrice = () => {
    let formatPrice = new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' })
    let total= 0
    if(shoppingCart){
      shoppingCart.forEach(product => {
        if(!product)return
       
        total= total+ (+product.price)
        console.log('total',total);
      });
      if(total === 2500){
        setPriceBeforeDiscount(0)
      
      }
      if(total === 5250){
        setPriceBeforeDiscount(5250)
        total =  4200
      }
      if(total === 5000){
        setPriceBeforeDiscount(5000)
        total =  4500
      }
      if(total === 9200 ){
        setPriceBeforeDiscount(9200)
        total = 7400
      }
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
        <ProductCheckout handelChekOut={handelChekOut} loggdingUser={user} sum={sum} beforeDiscount={beforeDiscount}/>

        { isUserlogged?
        isSignupModalOpen?<section className='shopping-cart-signup-modal-container'>
        <SignupPage closeModal={closeModal} shoppingCart={shoppingCart} isUserlogged={isUserlogged} setIsUserlogged={setIsUserlogged} from={'shopping-cart'}  />
         </section>:''
         :  ''
         }
    </section>
  )
}
