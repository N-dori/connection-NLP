import { storageService } from "./storage.service"
export const userService = {
    getUser,
    getEmptyUser,
    signup,

}
const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

const user = null


function getUser() {
    return new Promise((resolve) => {
const loggedinUser =storageService.load(STORAGE_KEY_LOGGEDIN_USER)
console.log('loggedinUser',loggedinUser);

resolve(loggedinUser) 
        })


}

function signup(credentials) {
    storageService.store(STORAGE_KEY_LOGGEDIN_USER, credentials)
    return user
}
function getEmptyUser() {
    return {
        fname: "",
        userName:"",
        password:"",
        email: "",
        courses:[],
        moves: [],
    }
}

//Add the functions:
// - signup(name)
// - addMove(contact, amount)
// Use the local storage to save/ load the user