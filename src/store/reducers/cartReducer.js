

export const ADD_TO_CART = 'ADD_TO_CART '
export const REMOVE_FORM_CART = 'REMOVE_FORM_CART '


const INITIAL_STATE = {
  shoppingCart:null

}
export function cartReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
 
    
        case ADD_TO_CART:
            return {
                ...state,
                shoppingCart: state.shoppingCart.push(action.courseId)
            }
        case REMOVE_FORM_CART:
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(course => course._id !== action.courseId)
            }

 
    default:
         return state
 
  } 
    
}