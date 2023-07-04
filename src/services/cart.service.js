import { storageService } from "./async-storage.service"
import { courseService } from "./course.service"
import { httpService } from "./http.service"
import { userService } from "./userService"
import { utilService } from "./util.service"
const cart_DB= 'cart'



export const cartService = {
    loadShoppingCart,
    addToUserCart,
    removeFromUserCart,
    
}

async function loadShoppingCart () {
    const userCourses = await _getCartCourses()
    console.log('userCourses',userCourses);
    return userCourses
    // utilService.saveToStorage(cart_DB,courses )

}


async function  _getCartCourses() {
  try{  
    // const carts = await httpService.get('coures')
    const loggedinUser  =  userService.getLoggedinUser()
    if(loggedinUser){
        const user = await userService.getUserById(loggedinUser._id)
        const { cart } = user 
        const courses = cart.map(async couresId => {
            return {
                course: await courseService.getCourseById(couresId)
            }
        });
        return Promise.all(courses);
    }else{
        return 
    }

}
    catch(err){
        console.log('could not load courses',err);
        
    }
}
async function addToUserCart(couresId) {
    try{
    // const coures = await httpService.get(`coures/${couresId}`)

    console.log('couresId',couresId)
    const loggedinUser  = userService.getLoggedinUser()
    const user = await userService.getUserById(loggedinUser._id)
    const found =  user.cart.find(currCourseId=>currCourseId === couresId)
    if(!found){
        user.cart.push(couresId) 
        const updatedUser =  await userService.updateUser(user)
        return  updatedUser.cart
    }else {

        return
    }
   
    } 
    catch(err){
        console.log('could not add To User Cart',err);
        
    }
}
async function removeFromUserCart(courseId) {
    try{
    // const coures = await httpService.get(`coures/${couresId}`)
    console.log('couresId',courseId)
    const loggedinUser  = userService.getLoggedinUser()
    const user = await userService.getUserById(loggedinUser._id)
    console.log('user removeFromUserCart',user);
    
    const idx= user.cart.findIndex(course => course._id === courseId)
    user.cart.splice(idx,1)
    const updatedUser =  await userService.updateUser(user)
   
        return  updatedUser.cart
    } 
    catch(err){
        console.log('could not add To User Cart',err);
        
    }
}