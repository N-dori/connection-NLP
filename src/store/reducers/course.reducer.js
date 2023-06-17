
export const SET_COURSES = 'SET_COURSES'
export const ADD_COURSE = 'ADD_COURSE '
export const UPDATE_COURSE = 'UPDATE_COURSE '
export const REMOVE_COURSES = 'REMOVE_COURSES '
export const SET_FILTER_BY = 'SET_FILTER_BY '


const INITIAL_STATE = {
     courses:null,
        SelectedCourseId:null,
           filterBy:{
           title:"Ajax"
}
}
export function courseReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
    case SET_COURSES:
        return {
            ...state,
            courses: action.courses
        }
    
    case ADD_COURSE:
        console.log('ADD_COURSE reducer',action.course);
        
        return {
            ...state,

            courses: [...state.courses, action.course]
        }
    case REMOVE_COURSES:
        return {
            ...state,
            courses: state.courses.filter(course => course._id !== action.courseId)
        }
    case UPDATE_COURSE:
        return {
            ...state,
            courses: state.courses.map(course => course._id === action.course._id ? action.course : course )
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