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
  const data = await storageService.post(Announcement_DB,announcement)
       return data
}
function getEmptyAnnouncement() {
    return {
        _id:utilService.makeId(8),
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
        // const Announcements = await httpService.get('coures')
        const Announcements = await storageService.query(Announcement_DB)
        return Announcements
    }
    catch (err) {
        console.log('could not load Announcements', err);

    }
}

async function getAnnouncementById(couresId) {
    try {
        // const coures = await httpService.get(`coures/${couresId}`)
        const announcements = await storageService.query(Announcement_DB)
        const announcement = announcements.find(announcement => announcement._id === couresId)
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
      const announcement = storageService.put(Announcement_DB,announcementToUpdate)
        return announcement
    }
    catch (err) {
        console.log('could not _update Announcement ', err);
    }
}
