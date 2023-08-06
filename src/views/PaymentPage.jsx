import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/actions/user.actions'
import { userService } from '../services/userService'
import { clearCart } from '../store/actions/cart.actions'
import { updateStudentsCourse } from '../store/actions/course.actions'
import { COURSE_WAS_PURCHASED, socketService } from '../services/socket.service'
import { eventBus } from '../services/event-bus.service'

export  function PaymentPage() {

  const [user,setUser]=useState(false)
  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  // const loggedinUser = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const param = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
 useEffect(() => {
  loadUser()

  socketService.on(COURSE_WAS_PURCHASED, (data) => {
    console.log('socket data : ---',data)
    if(data){
      setTimeout(() => {
        
        eventBus.emit('show-msg', { txt: '"מודים לך על רכישת הקורס , תוכל/י למצוא את הקורס תחת הלשונית "הקורסים שלי ', type: 'success', delay:6666 })
      }, 3500);
    
    }
      
    })
 }, [])
 
  const loadUser = async () => {
    const user = await userService.getUserById(param.id)
    setUser(user)
  }

    const handelPayment= async () =>{
      shoppingCart.forEach(product => {
        const miniCourse = {
          _id:product._id,
          courseCoverImg:product.courseCoverImg,
          title:product.title,
          subTitle: product.subTitle,
          purchasedAt:Date.now()
        }
        user.courses.push(miniCourse) 
        user.action = 'purchase'       
      });
      console.log('user after payment in payment',user);
      user.cart = []
      dispatch(updateUser(user))
      dispatch(clearCart())
      setTimeout(() => {
        navigate('/our-courses')
        
      }, 6000);
      dispatch(updateStudentsCourse(user,shoppingCart))
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
