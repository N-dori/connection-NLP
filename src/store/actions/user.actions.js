import { useNavigate } from "react-router-dom";
import { userService } from "../../services/userService";
import { SET_USER, LOGOUT_USER, UPDATE_USER} from "../reducers/user.reducer";



export function signup(userToSignup){
    try{

        return async(dispatch,getState)=>{
            const user= await userService.signup(userToSignup)
            console.log('user after backend', user);
            
            const action = {
                type: SET_USER,
                user
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not signup User',err);
    }
}
export function logout(){
    try{
        return async(dispatch,getState)=>{
            console.log('LOGOUT_USER');   
            const action = {
                type:LOGOUT_USER     
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not logout',err);
    }
}
export function updateUser(user){
    try{
        return async(dispatch,getState)=>{
            const updatedUser = await userService.updateUser(user)
            console.log('updatedUser after backend',updatedUser);       
            const action = {
                type:UPDATE_USER,
                updatedUser    
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not signup User',err);
    }
}
export function getUserById(userId){
    try{
        return async(dispatch,getState)=>{
           const updatedUser = await userService.getUserById(userId)
            console.log('LOGOUT_USER');   
            const action = {
                type:UPDATE_USER,
                updatedUser    
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not signup User',err);
    }
}

