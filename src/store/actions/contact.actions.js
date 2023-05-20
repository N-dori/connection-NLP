import { contactService } from "../../services/contact.service"
import { ADD_CONTACT, REMOVE_CONTACTS, SET_CONTACTS, SET_FILTER_BY, UPDATE_CONTACT } from "../../store/reducers/contact.reducer"
import { userService } from "../../services/user.service"

export function loadContacts(){
    try{

        return async(dispatch,getState)=>{
            const contacts= await contactService.getContacts(getState().contactModule.filterBy)
            const action = {
                type: SET_CONTACTS,
                contacts
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load contacts',err);
    }
}
export function handelContactFundsTransfer(amount,updatedContact){
    try{
      
        return async(dispatch,getState)=>{
          const contact =  await contactService.saveContact({...updatedContact},amount)
            const action = {
                type:UPDATE_CONTACT,
                contact
            }
           dispatch(action)
     
    }
     
    }catch(err){
        console.log('can not handelFundsTransfer',err);
    }
}
export function removeContact(contactId){
    
    return async(dispatch,getState) => {
    try{
            await contactService.deleteContact(contactId)
            const action = {type: REMOVE_CONTACTS, contactId}
            dispatch(action)
    }catch(err){
        console.log('can not remove contact',err);
    }
}
}

export function saveContact(newContact){
    return async(dispatch,getState) => {
    try{
        if(!newContact._id){
            console.log('saveContact no id',newContact);
            
            const contact=   await  contactService.saveContact(newContact)
            console.log('contact before reducer',contact);
            
            // const action = {type:ADD_CONTACT, contact}
            // dispatch(action)
            
        }else{
            console.log('saveContact updating');
            const contact=   await  contactService.saveContact(newContact)
            const action = {type:UPDATE_CONTACT, contact}
            dispatch(action)
        }
    }catch(err){
        console.log('can not add contact',err);
    }
}

}
export function setFilterBy(filterBy){

    return (dispatch) => {
            const action = {type: SET_FILTER_BY, filterBy}
            dispatch(action)
 
}
}