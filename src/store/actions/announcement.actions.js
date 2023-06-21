import { announcementService } from "../../services/announcement.service"
import { SET_ANNOUNCEMENTS,ADD_ANNOUNCEMENT, UPDATE_ANNOUNCEMENT } from "../reducers/announcement.reducer"

export function loadAnnouncements(){
    try{

        return async(dispatch,getState)=>{
            const announcements= await announcementService.getAnnouncements()
            const action = {
                type: SET_ANNOUNCEMENTS,
                announcements
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load announcements',err);
    }
}
export function addAnnouncements(announcementToAdd){
    try{

        return async(dispatch,getState)=>{
            const announcement= await announcementService.addAnnouncements(announcementToAdd)
            const action = {
                type: ADD_ANNOUNCEMENT,
                announcement
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load announcements',err);
    }
}
export function addComment(announcId,commentToAdd){
    try{

        return async(dispatch,getState)=>{
            const announcement= await announcementService.addComment(announcId,commentToAdd)
            const action = {
                type: UPDATE_ANNOUNCEMENT,
                announcement
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load announcements',err);
    }
}



