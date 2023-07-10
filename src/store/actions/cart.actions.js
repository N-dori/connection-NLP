import { cartService } from "../../services/cart.service"
import { userService } from "../../services/userService";
import { ADD_TO_CART,SET_CART, REMOVE_FORM_CART } from "../reducers/cartReducer"

export  function loadCart(){
    try{
        
        return async(dispatch,getState)=>{
            const user = await userService.getLoggedinUser()
            const courses = getState().couresModule.courses
            if(!courses){
                return
            }
            const cart= await cartService.loadShoppingCart(courses,user._id)
            //cart is an array with courses 
            //TODO: save to cart mini course
            console.log('cart in service',cart);
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
export  function removeProduct(productId){
    try{
        
        return async(dispatch,getState)=>{
            const cart= await cartService.removeFromUserCart(productId)
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
            const userId =  getState().userModule.loggdingUser._id
            if(userId){
                await cartService.addToUserCart(courseId,userId)
            }else{
                const userId= userService.getLoggedinUser()
                await cartService.addToUserCart(courseId,userId)
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

