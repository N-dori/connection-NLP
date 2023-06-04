
import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { imgService } from "./imgService"
import { localStorageService } from "./storage.service"

export const userService = {
    getUser,
    getEmptyUser,
    signup,
    updateUser,
    getStoredLoginUser,
}
const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const users=localStorageService.load(USER_KEY) || _setUsers()

const user = null
async function _setUsers () {
    localStorageService.store(USER_KEY,_createUsers())
}
 function getStoredLoginUser() {
    return new Promise((resolve) => {
        const user = localStorageService.load(STORAGE_KEY_LOGGEDIN_USER)  
        console.log('user',user);
          
        resolve(user) 
                })
}
function _createUsers(){
const users =[
    {
        fullname:'ella',
        username:'',
        password:'123',
        email:'ella@gmail.com',
        imgUrl:'',
        courses:[{
        courseId:"",
        courseImgUrl:"",
        courseTitle:'',
        }]    
    },
    {
        fullname:'nadav',
        username:'',
        password:'111',
        email:'nadav@gmail.com',
        imgUrl:'',
        courses:[{
        courseId:"",
        courseImgUrl:"",
        courseTitle:'',
        }]    
    },
]
return users
}

function getUser() {
    return new Promise((resolve) => {
const loggedinUser =storageService.post(STORAGE_KEY_LOGGEDIN_USER)
console.log('loggedinUser',loggedinUser);

resolve(loggedinUser) 
        })
}

async function signup(credentials) {
    
//     const cdAfterbackend= await httpService.post('auth/signup',credentials)
//    console.log('cdAfterbackend',cdAfterbackend);
if(!credentials.imgUrl){
    credentials.imgUrl=imgService.getImg('user')
}
  await  storageService.post(USER_KEY,credentials)
   localStorageService.store(STORAGE_KEY_LOGGEDIN_USER, credentials.fname)
   return credentials
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
