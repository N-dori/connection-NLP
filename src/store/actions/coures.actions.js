import { couresService } from "../../services/coures.service"
import {  SET_COURSES,  } from "../reducers/coures.reducer"


export function loadCourses(){
    try{

        return async(dispatch,getState)=>{
            const courses= await couresService.getCourse(getState().couresModule.filterBy)
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

