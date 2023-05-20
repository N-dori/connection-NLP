import { userService } from "../../services/user.service";
import { SET_USER } from "../reducers/user.reducer";


export function loadloggedinUser(){
    try{

        return async(dispatch,getState)=>{
            const user= await userService.getUser()
            const action = {
                type: SET_USER,
                user
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load User',err);
    }
}
export function handelUserFundsTransfer(amount, contact){
    try{
        let currMove = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            coins: amount
          }
        return async(dispatch,getState)=>{
            const user= await userService.handelFundsTransfer(currMove)
            const action = {
                type: SET_USER,
                user
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load User',err);
    }
}