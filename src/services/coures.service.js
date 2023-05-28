import { httpService } from "./http.service"
export const couresService = {
    getCourse,
    getCourseById,

}
async function getCourse() {
  try{  
    const courses = await httpService.get('coures')
    return courses}
    catch(err){
        console.log('could not load courses',err);
        
    }
}
async function getCourseById(couresId) {
    try{
    const coures = await httpService.get(`coures/${couresId}`)
    console.log(' coures ',coures);
return coures
    } 
    catch(err){
        console.log('could not load coures by id ',err);
        
    }
}