import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { localStorageService } from "./localStorage.service"
import { utilService } from "./util.service"
const Announcement_DB = 'Announcement'



export const announcementService = {
    getAnnouncements,
    getEmptyAnnouncement,
    getAnnouncementById,
    addAnnouncements,
    getEmptyComment,
    addComment,

}
_setAnnouncements()
function _setAnnouncements() {
    utilService.saveToStorage(Announcement_DB, _creatAnnouncements())

}
function _creatAnnouncements() {
    const announcements = []
    announcements.push(getEmptyAnnouncement())
    return announcements
}
async function addAnnouncements(announcement) {
//    const announcements= utilService.loadFromStorage(Announcement_DB )||[]
  const data = await httpService.post('announcement',announcement)
       return data
}
function getEmptyAnnouncement() {
    return {
        // _id:utilService.makeId(8),
        courseId:"",
        givenBy: {id:"",name:'',imgUrl:''},
        title:"",
        content:"",
        givenAt: "", 
        comments:[],
     
    }
}
function getEmptyComment() {
    return {
        id:utilService.makeId(8),
        commentBy:{},
        commentAt:"",
        content:""
     
    }
}


async function getAnnouncements() {
    try {
        const announcements = await httpService.get('announcement')
        console.log('all Announcements in service', announcements);
        
        return announcements
    }
    catch (err) {
        console.log('could not load Announcements', err);

    }
}

async function getAnnouncementById(announcId) {
    try {
        // const announcements = await httpService.get(`coures/${couresId}`)
        const announcement = await httpService.get(`announcement/${announcId}`)
        console.log('your Announcement by id in service ', announcement);
        return announcement
    }
    catch (err) {
        console.log('could not load announcement by id ', err);

    }
}
async function addComment(announcId,commentToAdd){
    try{
        const announcement = await getAnnouncementById(announcId)
            if(announcement){
                announcement.comments.push(commentToAdd)
                await  updateAnnouncement(announcement)
                 return announcement
            }
    }catch(err){
        console.log('err could not add comment', err);
        
    }

}
async function  updateAnnouncement(announcementToUpdate) {
    try {
      const announcement = httpService.put(`announcement`,announcementToUpdate)
        return announcement
    }
    catch (err) {
        console.log('could not _update Announcement ', err);
    }
}
