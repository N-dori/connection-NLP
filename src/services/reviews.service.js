import { httpService } from "./http.service"
export const reviewService = {
    getReviews,
    getReviewById,
    deleteReview

}
async function getReviews() {
  try{  
    const reviews = await httpService.get('review')
    return reviews}
    catch(err){
        console.log('could not load reviews',err);
        
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