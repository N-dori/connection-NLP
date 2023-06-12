
import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { imgService } from "./imgService"
import { localStorageService } from "./localStorage.service"
import { utilService } from "./util.service"

export const userService = {
    getEmptyUser,
    signup,
    updateUser,
    vrifyPassword,
    getLoggedinUser,
    getUserById,
    clearUserCart,

}
const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const users=localStorageService.load(USER_KEY) || _setUsers()

const user = null
async function _setUsers () {
    localStorageService.store(USER_KEY,_createUsers())
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
async function getUserById(userId) {
    try{
    // const user = await httpService.get(`user/${userId}`)
    const users = await storageService.query(USER_KEY)
    const user = users.find(user => user._id === userId)
    console.log('your user by id in service ',user);
return user
    } 
    catch(err){
        console.log('could not load user by id ',err);
        
    }
}

 function  getLoggedinUser() {
const loggedinUser =  localStorageService.load(STORAGE_KEY_LOGGEDIN_USER)
console.log('loggedinUser',loggedinUser);
return loggedinUser
     
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
if(!credentials.cart){
    credentials.cart=[]
}
if(!credentials.courses){
    credentials.courses=[]
}
  await  storageService.post(USER_KEY,credentials)
   localStorageService.store(STORAGE_KEY_LOGGEDIN_USER, {_id:credentials._id,fname:credentials.fname, cart:[]})
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
async function updateUser(userToUpdate){
    try{
        const users = await storageService.query(USER_KEY)
        const updatedUsers = users.map(currUser => currUser._id === userToUpdate._id ? userToUpdate : currUser )
        localStorageService.store(USER_KEY,updatedUsers)
    }catch(err) {
        console.log('could not update user', err );
    }
    // const updatedUser= await httpService.put(`user`,user)
return userToUpdate
  
}
async function clearUserCart(userId){
    try{
        const user = await userService.getUserById(userId)
        console.log('clearUserCart servise  ', user );
        user.cart = [] 
      const updatedUser =   await updateUser(user)
        console.log('clearUserCart servise  ', updatedUser );

    }catch(err) {
        console.log('could not clear User cart ', err );
    }
    // const updatedUser= await httpService.put(`user`,user)

  
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
