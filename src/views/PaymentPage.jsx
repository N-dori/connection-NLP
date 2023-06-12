import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/actions/user.actions'
import { courseService } from '../services/course.service'
import { userService } from '../services/userService'
import { clearCart } from '../store/actions/cart.actions'

export  function PaymentPage() {
  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const param = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
    const handelPayment= async () =>{
      const loggdingUser = await userService.getUserById(param.id)
    
      shoppingCart.forEach(product => {
        loggdingUser.courses.push(product.course)
        
      });
      console.log('user after payment in payment',loggdingUser);
        dispatch(updateUser(loggdingUser))
        setTimeout(() => {
          dispatch(clearCart(loggdingUser._id))
          
        }, 1000);
        navigate('/')
    }

  return (
      <section className='payment-page flex-jc-ac'>
        <h1>payment - page</h1>
        <div className='img-warpper'>

        <img className='paymet-img' src={'https://files.readme.io/ka2QNNXDTw7FncBxui9K_HostedPaymentPage.png'}/>

        </div>
        <button className='action-btn' onClick={handelPayment}>pay</button>

      </section>
     
  )
}
