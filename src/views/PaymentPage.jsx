import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/actions/user.actions'
import { userService } from '../services/userService'
import { clearCart } from '../store/actions/cart.actions'
import { updateStudentsCourse } from '../store/actions/course.actions'

export  function PaymentPage() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const loggedinUser = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const param = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
    const handelPayment= async () =>{
      const user = await userService.getUserById(param.id)
      shoppingCart.forEach(product => {
        const miniCourse = {
          _id:product.course._id,
          courseCoverImg:product.course.courseCoverImg,
          title:product.course.title,
          subTitle: product.course.subTitle
        }
        user.courses.push(miniCourse)        
      });
      // console.log('user after payment in payment',user);
      dispatch(updateUser(user))
      setTimeout(() => {
        dispatch(clearCart(user._id))
        navigate('/our-courses')
        
      }, 1000);
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
