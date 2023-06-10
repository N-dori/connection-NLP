import { storageService } from "./async-storage.service"
import { courseService } from "./course.service"
import { httpService } from "./http.service"
import { userService } from "./userService"
import { utilService } from "./util.service"
const cart_DB= 'cart'



export const cartService = {
    loadShoppingCart,
    addToUserCart,
    
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
    const loggedinUser  = await userService.getLoggedinUser()
    const user = await userService.getUserById(loggedinUser._id)
    const { cart } = user 
    const courses = cart.map(async couresId => {
        return {
            course: await courseService.getCourseById(couresId)
        }
    });
    return Promise.all(courses);

}
    catch(err){
        console.log('could not load courses',err);
        
    }
}
async function addToUserCart(couresId) {
    try{
    // const coures = await httpService.get(`coures/${couresId}`)

    console.log('couresId',couresId)
    const loggedinUser  = await userService.getLoggedinUser()
    const user = await userService.getUserById(loggedinUser._id)
    user.cart.push(couresId) 
    const updatedUser =  await userService.updateUser('user',user)
   
        return  updatedUser.cart
    } 
    catch(err){
        console.log('could not add To User Cart',err);
        
    }
}