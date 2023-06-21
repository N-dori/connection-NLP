
export const SET_ANNOUNCEMENTS = 'SET_ANNOUNCEMENTS'
export const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT '
export const ADD_COMMENT = 'ADD_COMMENT '
export const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT '
export const REMOVE_ANNOUNCEMENTS = 'REMOVE_ANNOUNCEMENTS '
export const SET_FILTER_BY = 'SET_FILTER_BY '


const INITIAL_STATE = {
     announcements:null,
        SelectedAnnouncementId:null,

}
export function announcementReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
    case SET_ANNOUNCEMENTS:
        return {
            ...state,
            announcements: action.announcements
        }
    
    case ADD_ANNOUNCEMENT:
        console.log('ADD_ANNOUNCEMENT reducer',action.announcement);
        
        return {
            ...state,

            announcements: [...state.announcements, action.announcement]
        }
    case REMOVE_ANNOUNCEMENTS:
        return {
            ...state,
            announcements: state.announcements.filter(announcement => announcement._id !== action.announcementId)
        }
    case UPDATE_ANNOUNCEMENT:
        return {
            ...state,
            announcements: state.announcements.map(announcement => announcement._id === action.announcement._id ? action.announcement : announcement )
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