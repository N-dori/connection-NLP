import { reviewService } from "../../services/review.service"
import {  REMOVE_REVIEW ,SET_REVIEWS ,UPDATE_REVIEW ,ADD_REVIEW } from "../reducers/reviews.reducer"


export function loadReviews(){
    try{

        return async(dispatch,getState)=>{
            const reviews= await reviewService.getReviews()
            const action = {
                type: SET_REVIEWS,
                reviews
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load reviews',err);
    }
}
export function removeReview(reviewId){
    
    return async(dispatch,getState) => {
    try{
            await reviewService.deleteReview(reviewId)
            const action = {type: REMOVE_REVIEW, reviewId}
            dispatch(action)
    }catch(err){
        console.log('can not remove review',err);
    }
}}
export function saveReview(newReview){
    return async(dispatch,getState) => {
    try{
        if(!newReview._id){
            console.log('saveReview no id',newReview);
            
            const review=   await  reviewService.saveReview(newReview)
            console.log('review before reducer',review);
            
            const action = {type:ADD_REVIEW, review}
            dispatch(action)
            
        }else{
            console.log('saveReview updating');
            const review=   await  reviewService.saveReview(newReview)
            const action = {type:UPDATE_REVIEW, review}
            dispatch(action)
        }
    }catch(err){
        console.log('can not add review',err);
    }
}

}

