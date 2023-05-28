import { storageService } from "./storage.service"
import { httpService } from "./http.service"
export const userService = {
    getUser,
    getEmptyUser,
    signup,
    updateUser,
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

async function signup(credentials) {
    
    const cdAfterbackend= await httpService.post('auth/signup',credentials)
   console.log('cdAfterbackend',cdAfterbackend);
   storageService.store(STORAGE_KEY_LOGGEDIN_USER, credentials)
   return cdAfterbackend
}
function getEmptyUser() {
    return {
        fname: "",
        userName:"",
        password:"",
        email: "",
        imgUrl:'',
        courses:[],
        moves: [],
    }
}
async function updateUser(user){
    const updatedUser= await httpService.put(`user`,user)
    console.log('userService updatedUser after backend ',updatedUser);
    return updatedUser
    
}
