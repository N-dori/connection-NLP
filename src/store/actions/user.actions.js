import { userService } from "../../services/userService";
import { SET_USER, LOGOUT_USER, UPDATE_USER, SET_USERS } from "../reducers/user.reducer";
import { cartService } from "../../services/cart.service";



export function signup(userToSignup, from, shoppingCart) {
    try {

        return async (dispatch, getState) => {
            let user = await userService.signup(userToSignup)
            // if user signing up from the shopping cart cmp, 
            //we make sure to add the producat he wanted to his cart

            if (from === 'shopping-cart') {
                if (!shoppingCart) {
                    return
                } else {
                    shoppingCart.forEach(courseId => {
                        const courseInUserCart = user.cart.find(userCourse => userCourse._id === courseId)
                        if(!courseInUserCart){
                            //if course does not already exsist in user's cart we push it in to his cart 
                            user.cart.push(courseId)
                        }
                        console.log('adding to user courses user after backend', user);
                    })
                
                    // after adding the productes to his cart need to update data base    
                    const updatedUser = await userService.updateUser(user)
                    user=updatedUser
                    //at the end we need to clear guest's cart
                    cartService.clearGuestCart()
                    console.log('user after backend', updatedUser);
                }
            }

            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        }

    } catch (err) {
        console.log('can not signup User', err);
    }

}
export function login(credentials) {
    try {

        return async (dispatch, getState) => {
            const user = await userService.login(credentials)
            console.log('user in user action  in login func', user);
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
            return user
        }

    } catch (err) {
        console.log('can not login User', err);
    }
}

export function loadGuestUser() {
    try {

        return async (dispatch, getState) => {
            //checking first if the user has loginToken
            const loggdingUser = await userService.getLoggedinUser()
            if (loggdingUser) {
                return
            } else {
                const guest = userService.getUserGuest()
             const user = await userService.signup(guest)
             console.log('user in user action  in login func', user);
             const action = {
                 type: SET_USER,
                 user
             }
             dispatch(action)
       
            }
        }

    } catch (err) {
        console.log('can not login User', err);
    }
}


export function logout() {
    try {
        return async (dispatch, getState) => {
            console.log('LOGOUT_USER');
            const action = {
                type: LOGOUT_USER
            }
            dispatch(action)
        }

    } catch (err) {
        console.log('can not logout', err);
    }
}
export function getUsers() {
    try {
        return async (dispatch, getState) => {
            const users = await userService.getUsers()
            // console.log('SET_USERS',users);
            const action = {
                type: SET_USERS,
                users:[users]
            }
            dispatch(action)
        }

    } catch (err) {
        console.log('can not logout', err);
    }
}
export function updateUser(user) {
    try {
        return async (dispatch, getState) => {
            const updatedUser = await userService.updateUser(user)
            console.log('updatedUser after backend', updatedUser);
            const action = {
                type: UPDATE_USER,
                updatedUser
            }
            dispatch(action)
        }

    } catch (err) {
        console.log('can not signup User', err);
    }
}
export function isSubEpisodeFullyWatched(userId,courseId,lastEpisode,lastSubEpisode,duration,playedSecondsRef) {
    try {
        return async (dispatch, getState) => {

            // console.log('**********userId**********', userId);
            // console.log('**********courseId**********',courseId);
            // console.log('**********lastSubEpisode***********', lastSubEpisode);
            // console.log('*********duration********', duration);
            // console.log('***************lastEpisode***************', lastEpisode);
            // console.log('playedSecondsRef', playedSecondsRef);
            if((duration-5)<playedSecondsRef){
                const updatedUser = await userService.isSubEpisodeFullyWatched(userId,courseId,lastEpisode,lastSubEpisode)

            }
            // const action = {
            //     type: UPDATE_USER,
            //     updatedUser
            // }
            // dispatch(action)
        }

    } catch (err) {
        console.log('can not signup User', err);
    }
}

export function updateCurrTimeWacth(userId, courseId, currEpisode, currSubEpisode, currTimeWatch, videoUrl) {
    try {
        return async (dispatch, getState) => {
            // console.log('in action episodeId', currEpisode);
            // console.log('in action subEpisodeId', currSubEpisode);
            const updatedUser = await userService.updateCurrTimeWacth(userId, courseId, currEpisode, currSubEpisode, currTimeWatch, videoUrl)
            console.log('updatedUser after backend', updatedUser);
            const action = {
                type: UPDATE_USER,
                updatedUser
            }
            dispatch(action)
        }

    } catch (err) {
        console.log('can not signup User', err);
    }
}

export function getUserById(userId) {
    try {
        return async (dispatch, getState) => {
            const updatedUser = await userService.getUserById(userId)
            console.log('LOGOUT_USER');
            const action = {
                type: UPDATE_USER,
                updatedUser
            }
            dispatch(action)
        }

    } catch (err) {
        console.log('can not signup User', err);
    }
}
export function setLoggedinUser(user) {
    try {
        return async (dispatch, getState) => {
            console.log('SET_USER');
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        }

    } catch (err) {
        console.log('can not set logged in User', err);
    }
}


