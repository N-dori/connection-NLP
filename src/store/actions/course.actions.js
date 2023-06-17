import { courseService } from "../../services/course.service"
import { SET_COURSES, SET_FILTER_BY } from "../reducers/course.reducer"

export function loadCourses(){
    try{

        return async(dispatch,getState)=>{
            const courses= await courseService.getCourses(getState().couresModule.filterBy)
            const action = {
                type: SET_COURSES,
                courses
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load courses',err);
    }
}
export function updateCourse(loggdingUser,shoppingCart){
    try{

        return async(dispatch,getState)=>{
            //getting from service updated courses
            const courses= await courseService.updateCoursesStudents(loggdingUser,shoppingCart)
            console.log('courses in actions after backend',courses);
            
            const action = {
                type: SET_COURSES,
                courses
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load courses',err);
    }

}
export function setFilterBy(filterBy){

    return (dispatch) => {
            const action = {type: SET_FILTER_BY, filterBy}
            dispatch(action)
 
}
}

