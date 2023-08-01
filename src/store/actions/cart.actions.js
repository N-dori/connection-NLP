import { cartService } from "../../services/cart.service"
import { courseService } from "../../services/course.service";
import { userService } from "../../services/userService";
import { SET_CART, REMOVE_FORM_CART } from "../reducers/cartReducer"

export  function loadCart(){
    try{
        
        return async(dispatch,getState)=>{
            const userId = getState()?.userModule.loggdingUser?._id
            const courses = getState()?.couresModule.courses
            let cart 
            if(userId && courses){
                console.log('loadCart : inside userId && courses ',userId);
                
                const userCart= await cartService.loadShoppingCart(courses,userId)
                cart=userCart
            }else
            {
                const courses =await courseService.getCourses(getState().couresModule.filterBy)
                const user = await userService.getLoggedinUser()
                const userCart= await cartService.loadShoppingCart(courses,user._id ?user._id :'64abe02a8723e73efc4d4be8')
                cart=userCart
            }
            //cart is an array with courses 
            //TODO: save to cart mini course
            // console.log('cart in service',cart);
            const action = {
                type: SET_CART,
                cart
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load cart',err);
    }
}
export  function removeProduct(productId,userId){
    try{
        
        return async(dispatch,getState)=>{
            console.log('removeProduct ',userId);
            const cart= await cartService.removeFromUserCart(productId,userId)
            console.log('cart after removeing', cart);
            
            const action = {
                type: REMOVE_FORM_CART,
                productId
            }
            dispatch(action)
  
    }
     
    }catch(err){
        console.log('can not load cart',err);
    }
}
export  function clearCart(userId){
    try{
        
        return async(dispatch,getState)=>{
        let cart = await userService.clearUserCart(userId)
            const action = {
                type: SET_CART,
                cart
            }
            dispatch(action) 
    }    
    }catch(err){
        console.log('can not load cart',err);
    }
}
export function addToUserCart(courseId){
    try{
    
        return async(dispatch,getState)=>{
            const userId = getState()?.userModule.loggdingUser?._id
            if(userId){
                await cartService.addToUserCart(courseId,userId)
            }else{
                const user = await userService.getLoggedinUser()
                await cartService.addToUserCart(courseId,user._id)
            }
        //     const action = {
        //         type: ADD_TO_CART,
        //         courseId
        //     }
        //    dispatch(action)
    }
     
    }catch(err){
        console.log('can not addToUserCart cart',err);
    }
}


