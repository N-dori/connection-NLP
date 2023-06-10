import { cartService } from "../../services/cart.service"
import { ADD_TO_CART,SET_CART, REMOVE_FORM_CART } from "../reducers/cartReducer"

export function loadCart(){
    try{

        return async(dispatch,getState)=>{
            const cart= await cartService.loadShoppingCart()
            console.log('cart',cart);
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
            await cartService.addToUserCart(courseId)
        //     const action = {
        //         type: ADD_TO_CART,
        //         courseId
        //     }
        //    dispatch(action)
    }
     
    }catch(err){
        console.log('can not load cart',err);
    }
}

