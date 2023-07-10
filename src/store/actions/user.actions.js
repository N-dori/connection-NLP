import { useNavigate } from "react-router-dom";
import { userService } from "../../services/userService";
import { SET_USER, LOGOUT_USER, UPDATE_USER } from "../reducers/user.reducer";



export function signup(userToSignup, from, shoppingCart) {
    try {

        return async (dispatch, getState) => {
            let user = await userService.signup(userToSignup)
            // if user signing up from the shopping cart cmp, 
            //we make sure to add the producat he wanted to his cart
            console.log('sign up user after backend in user action ', user);
            console.log('sign up user after backend shoppingCart ', shoppingCart);
            if (from === 'shopping-cart') {
                if (!shoppingCart) {
                    return
                } else {
                    shoppingCart.forEach(course => {
                        user.cart.push(course)
                        console.log('adding to user courses user after backend', user);
                    })
                    // after adding the productes to his cart need to update data base    
                    const updatedUser = await userService.updateUser(user)
                    user=updatedUser
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
                const guest = {
                    fname: "אורח",
                    password: "a",
                    email: "a",
                    imgUrl: 'a',
                    isAdmin: false,
                    courses: [],
                    cart: [],
                }
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

export function updateCurrTimeWacth(userId, courseId, currEpisode, currSubEpisode, currTimeWatch, videoUrl) {
    try {
        return async (dispatch, getState) => {
            console.log('in action episodeId', currEpisode);
            console.log('in action subEpisodeId', currSubEpisode);
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


