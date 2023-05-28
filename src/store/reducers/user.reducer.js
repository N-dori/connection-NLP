
export const SET_USER = 'SET_USER '
export const ADD_USER = 'ADD_USER '
export const UPDATE_USER = 'UPDATE_USER '
export const LOGOUT_USER = 'LOGOUT_USER'


const INITIAL_STATE = {
  loggdingUser:null

}
export function userReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
    case SET_USER:
        return {
            ...state,
            loggdingUser: {...action.user}
        }
    
    case LOGOUT_USER:
        return {
            ...state,
            loggdingUser:  null
        }
    case UPDATE_USER:
        return {
            ...state,
            loggdingUser:action.updatedUser
        }
 

    default:
         return state
 
  } 
    
}