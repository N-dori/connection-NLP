
import { httpService } from "./http.service"
import { localStorageService } from "./localStorage.service"


export const userService = {
    getEmptyUser,
    signup,
    login,
    // logout,
    updateUser,
    getLoggedinUser,
    getUserById,
    clearUserCart,
    updateCurrTimeWacth,
    getUserGuest,
    clearGuestCart,

}



// function logout(){
//     localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
// }


async function getUserById(userId) {
    try{
    const user = await httpService.get(`user/${userId}`)
    // const users = await storageService.query(USER_KEY)
    // const user = users.find(user => user._id === userId)
    // console.log('your user by id in service ',user);
return user
    } 
    catch(err){
        console.log('could not load user by id ',err);
        
    }
}

async function  getLoggedinUser() {
const loggedinUser =  await  httpService.get('auth/loggedinUser')
// console.log('loggedinUser',loggedinUser);
return loggedinUser
     
}
async function login (credentials) {
    try{
        console.log('login in service  before back end credentials',credentials);
        const loggedinUserAfterBackend= await httpService.post('auth/login',credentials)
        console.log(`loggedinUserAfterBackend`,loggedinUserAfterBackend);
        return loggedinUserAfterBackend

    }catch(err){
        console.log(`could not login with${credentials.fname}`,err);
    }
    
}

async function signup(credentials) {
    console.log('sign up before back end credentials',credentials);
 
        const userAfterBackend= await httpService.post('auth/signup',credentials)
       console.log('sign up user  in service AfterBackend',userAfterBackend);
    
   return userAfterBackend
}
function getEmptyUser() {
    return {
        fname: "",
        password:"",
        email: "",
        imgUrl:'',
        isAdmin:false,
        courses:[],
        cart: [],
    }
}
function getUserGuest () {
    return {
        fname: "אורח",
        password: "a",
        email: "a",
        imgUrl: 'a',
        isAdmin: false,
        courses: [],
        cart: [],
    }
}
async function updateUser(userToUpdate){
    try{
        const user = await httpService.put('user',userToUpdate)

    //     const updatedUsers = users.map(currUser => currUser._id === userToUpdate._id ? userToUpdate : currUser )
    //     localStorageService.store(USER_KEY,updatedUsers)
    //   const loggedinUser =  localStorageService.load(STORAGE_KEY_LOGGEDIN_USER)
    //    userToUpdate.courses.forEach(course => {
    //     if(!loggedinUser.courses){
    //         loggedinUser.courses =[]
    //     }
    //     loggedinUser.courses.push(course._id)
    //    });
    //   localStorageService.store(STORAGE_KEY_LOGGEDIN_USER,loggedinUser)
      console.log(' update user in user service', user );
    }catch(err) {
        console.log('could not update user', err );
    }
    // const updatedUser= await httpService.put(`user`,user)
return userToUpdate
  
}
async function updateCurrTimeWacth(userId,courseId, episodeId, subEpisodeId,currTimeWatch,videoUrl){
    try{
        console.log('userId',userId);
        console.log('courseId',courseId);
        console.log('episodeId',episodeId);
        console.log('subEpisodeId',subEpisodeId);
        console.log('currTimeWatch',currTimeWatch);
        
        //finding the user
        const userToUpdate = await getUserById(userId)
        //getting the relevent course 
       const course = userToUpdate.courses.find(course=> course._id===courseId)
      // creating new key lastTimeWatch -with the vlaue we got form the component
      if(!course){
        return
      }
       course.lastVideoWatched = {
        episode:episodeId,
        subEpisode:subEpisodeId,
        lastTimeWatched:currTimeWatch,
        videoUrl
                                  }                                                 
                                                                                 
       console.log(' updated course in updateCurrTimeWacth func', course );
       // updating his courses 
       const updatedCourses = userToUpdate.courses.map(currCourse => currCourse._id === course._id ? course : currCourse )
      userToUpdate.courses = updatedCourses
      // updateing the  user
      await updateUser(userToUpdate)
       console.log(' userToUpdate in updateCurrTimeWacth func', userToUpdate );
       return userToUpdate
    }catch(err) {
        console.log('could not update Curr TimeWacth of user', err );
    }
    // const updatedUser= await httpService.put(`user`,user)
  
}
async function clearUserCart(userId){
    try{
        const user = await userService.getUserById(userId)
        console.log('clearUserCart servise  ', user );
        user.cart = [] 
      const updatedUser =   await updateUser(user)
        console.log('clearUserCart servise  ', updatedUser );
      return updatedUser.cart
    }catch(err) {
        console.log('could not clear User cart ', err );
    }
    // const updatedUser= await httpService.put(`user`,user)

  
}
async function clearGuestCart(){
    try{
          await httpService.delete('user')
    }catch(err) {
        console.log('could clearUserCart ', err );
    }
    // const updatedUser= await httpService.put(`user`,user)

  
}

