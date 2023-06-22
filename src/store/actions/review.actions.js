
import { reviewService } from "../../services/reviews.service"
import { SET_REVIEWS,ADD_REVIEW,UPDATE_REVIEW } from "../reducers/review.reducer "


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

