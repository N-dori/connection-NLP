import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { loadCart, removeProduct } from '../store/actions/cart.actions'
import { ProductList } from '../cmps/ProductList'
import { ProductCheckout } from '../cmps/ProductCheckout'
import { SignupPage } from './SignupPage'
import { userService } from '../services/userService'

export function ShoppingCart() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isUserlogged,setIsUserlogged]=useState(false)
  const [loggdingUser,setLoggdingUser]=useState(false)
  const [isSignupModalOpen,setIsSignupModalOpen]=useState(false)
  // const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const [sum, setSum] = useState(0)
  
  
  // const courses= loggdingUser
  const param = useParams()

  useEffect(() => {
      loadCourses()
      culcTotalPrice()
      loadLoggedinUser()
  }, [shoppingCart.length])
     
    const loadCourses = () => {

      dispatch(loadCart())  
      
    }
    const loadLoggedinUser = async () => {
      const loggdingUser = await userService.getLoggedinUser()
      setLoggdingUser(loggdingUser)
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
      {(shoppingCart ||(shoppingCart.length===0))?
        <ProductList onRemove={onRemove} shoppingCart={shoppingCart} />
        : 'shopping cart is empty'
      }
      </section>
        <ProductCheckout handelChekOut={handelChekOut} loggdingUser={loggdingUser} sum={sum}/>

        { isUserlogged?
        isSignupModalOpen?<section className='shopping-cart-signup-modal-container'>
        <SignupPage closeModal={closeModal} shoppingCart={shoppingCart}isUserlogged={isUserlogged} setIsUserlogged={setIsUserlogged} from={'shopping-cart'} />
         </section>:''
         :  ''
         }
    </section>
  )
}
