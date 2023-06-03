
export const SET_REVIEWS = 'SET_REVIEWS'
export const ADD_REVIEW = 'ADD_REVIEW '
export const UPDATE_REVIEW = 'UPDATE_REVIEW '
export const REMOVE_REVIEW = 'REMOVE_REVIEWS '
export const SET_FILTER_BY = 'SET_FILTER_BY '


const INITIAL_STATE = {
     reviews:null,
        SelectedReviewId:null,
           filterBy:{
           title:""
}
}
export function reviewReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
    case SET_REVIEWS:
        return {
            ...state,
            reviews: action.reviews
        }
    
    case ADD_REVIEW:
        console.log('ADD_REVIEW reducer',action.review);
        
        return {
            ...state,

            reviews: [...state.reviews, action.review]
        }
    case REMOVE_REVIEW:
        return {
            ...state,
            reviews: state.reviews.filter(review => review._id !== action.reviewId)
        }
    case UPDATE_REVIEW:
        return {
            ...state,
            reviews: state.reviews.map(review => review._id === action.review._id ? action.review : review )
        }
    case SET_FILTER_BY:
        return {
            ...state,
         filterBy:{...action.filterBy}
        }
        
       
  
    default:
         return state
 
  } 
    
}