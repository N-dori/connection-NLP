
export const SET_USER = 'SET_USER '
export const SET_USERS = 'SET_USERS '
export const ADD_USER = 'ADD_USER '
export const UPDATE_USER = 'UPDATE_USER '
export const LOGOUT_USER = 'LOGOUT_USER'


const INITIAL_STATE = {
    users:null,
  loggdingUser:null

}
export function userReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
    case SET_USERS:
        return {
            ...state,
            users: {...action.users}
        }
    case SET_USER:
        if(!action.user){
            console.log('in reducer action.user if undefined');
            return state
        }
        return {
            ...state,
            loggdingUser: {...action.user}
        }
    
    case LOGOUT_USER:
        return {
            ...state,
            loggdingUser:null
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