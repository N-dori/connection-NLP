
import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { imgService } from "./imgService"
import { localStorageService } from "./storage.service"
import { utilService } from "./util.service"

export const userService = {
    getUser,
    getEmptyUser,
    signup,
    updateUser,
    getStoredLoginUser,
    vrifyPassword,
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
 function vrifyPassword(id,password) {
        return new Promise((resolve,reject) => {
            const users = localStorageService.load(USER_KEY)
            console.log('users',users);
            const user = users.find( user => user._id === id )
            console.log('user',user);
            if(user.password === password){
                resolve(user) 
            }else{
                resolve(false)
            }
                
              
                    })
    
}
function _createUsers(){
const users =[
    {
        _id:utilService.makeId(3),
        fullname:'ella',
        username:'',
        password:'123',
        email:'ella@gmail.com',
        imgUrl:'',
        courses:[{
        courseId:"",
        courseImgUrl:"",
        courseTitle:'',
        }] ,
        cart:[]   
    },
    {
        _id:utilService.makeId(3),
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
if(!credentials._id){
    credentials._id=utilService.makeId(3)
}
  await  storageService.post(USER_KEY,credentials)
   localStorageService.store(STORAGE_KEY_LOGGEDIN_USER, {_id:credentials._id,fname:credentials.fname})
   return credentials
}
function getEmptyUser() {
    return {
        _id:utilService.makeId(3),
        fname: "",
        userName:"",
        password:"",
        email: "",
        imgUrl:'',
        courses:[],
        cart: [],
    }
}
async function updateUser(user){
    const updatedUser= await httpService.put(`user`,user)
    console.log('userService updatedUser after backend ',updatedUser);
    return updatedUser
    
}
