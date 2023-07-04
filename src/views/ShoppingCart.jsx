import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { loadCart, removeProduct } from '../store/actions/cart.actions'
import { ProductList } from '../cmps/ProductList'
import { ProductCheckout } from '../cmps/ProductCheckout'
import { SignupPage } from './SignupPage'

export function ShoppingCart() {
  
  const dispatch = useDispatch()
  const [isUserlogged,setIsUserlogged]=useState(false)
  const navigate = useNavigate()
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
    let formatPrice = new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' })
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
  setSum(formatPrice.format(total.toFixed(2)))
}


const handelChekOut = () => {
  if(loggdingUser){
    navigate(`/payment/${loggdingUser._id}`)
  }else{
    setIsUserlogged(true)

  }
  }
  return (

    <section className='product-list-container grid'>
      <header className='headline-wrapper flex-col'>
      <h1 className='headline'> עגלת הקניות</h1>
      <p className='total-courses'>{shoppingCart?shoppingCart.length+' קורסים בעגלת הקניות':''} </p>
      </header>
      <section className='product-list-wrapper'>
      {shoppingCart ?
        <ProductList onRemove={onRemove} shoppingCart={shoppingCart} />
        : 'shopping cart is empty'
      }
      </section>
        <ProductCheckout handelChekOut={handelChekOut} loggdingUser={loggdingUser} sum={sum}/>

        { isUserlogged?<section className='shopping-cart-signup-modal-container'>
        <SignupPage shoppingCart={shoppingCart}isUserlogged={isUserlogged} setIsUserlogged={setIsUserlogged} from={'shopping-cart'} />
         </section>:''}
    </section>
  )
}
