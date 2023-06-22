import { storageService } from "./async-storage.service";
import { httpService } from "./http.service"
import { utilService } from "./util.service";

const REVIEW_KEY = 'review_DB'

export const reviewService = {
    getReviews,
    getReviewById,
    deleteReview,
    getEmptyReview,
    saveReview,

}
_setReviews()

function _setReviews() {
    utilService.saveToStorage(REVIEW_KEY, _creatReviews())

}
function _creatReviews() {
    const reviews = []
    reviews.push(getEmptyReview())
    return reviews
}
async function getReviews() {
  try{  
    // const reviews = await httpService.get('review')
    const reviews = await storageService.query(REVIEW_KEY)

    return reviews
}
    catch(err){
        console.log('could not load reviews',err);
        
    }
}


function getEmptyReview () {
      return {
        courseId:"",
        reviewedBy:{},
        reviewedAt:'',
        rate:'',
        content:'',
      }
}

async function getReviewById(reviewId) {
    try{
    const review = await httpService.get(`review/${reviewId}`)
    console.log(' review ',review);
return review
    } 
    catch(err){
        console.log('could not load review by id ',err);
        
    }
}
async function deleteReview(reviewId) {
    try{
     await httpService.delete(`review/${reviewId}`)

    } 
    catch(err){
        console.log('could not load review by id ',err);
        
    }
}
async function saveReview(newreview) {
    try{
        if(!newreview._id){
            newreview._id =utilService.makeId(8) 
           storageService.post(REVIEW_KEY,newreview)
           return newreview
        }else{
            storageService.put(REVIEW_KEY,newreview)
            return newreview
        }

    } 
    catch(err){
        console.log('could not load review by id ',err);
        
    }
}