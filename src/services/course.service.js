import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { utilService } from "./util.service"
const course_DB= 'course'

_setCourses ()

export const courseService = {
    getCourses,
    getCourseById,
    
}

function _setCourses () {
    utilService.saveToStorage(course_DB, _creatCourses())

}
function _creatCourses(){
    const courses = [{
        _id:utilService.makeId(9),
        title : "NLP Practitioner",
        subTitle : "A cutting-edge NLP Master",
        createdBy : "shlomo shushan",
        courseCoverImg : "https://top10a.ru/wp-content/uploads/2018/11/2-ispolzujte-nejrolingvisticheskoe-programmirovanie.jpg",
        TrailerVideoUrl : "https://www.youtube.com/watch?v=-fgnz2vetPU",
        totalHours : 255,
        totalVideos : 47,
        level : 'Practitioner',
        price : 490.90,
        createdAt : "",
        Students:[
                {
            userImgUrl:'https://img.freepik.com/free-icon/user_318-563642.jpg',
            username:'mama mia'
        } 
        ],
        episodes : [
                {
            id : utilService.makeId(7),
            title : "",
            subTitle : "",
            totalHours:0,
        subEpisodes :[
                    {
                        id : utilService.makeId(8),
                        title : "loam loram",
                        subTitle: "nlp gogog loram",
                        videoUrl : "https://www.youtube.com/watch?v=j6ciMNAgq7A"
                    }
                    ],
                }
        ]
},
{
    _id:utilService.makeId(9),
    title : "NLP Master",
    subTitle : "NLP (Neuro Linguistic Programming)",
    createdBy : "shlomo shushan",
    courseCoverImg : "https://avatars.mds.yandex.net/i?id=9e64dca9169ac79f7e861e117e656d86efc44ff2-4568991-images-thumbs&n=13",
    TrailerVideoUrl : "https://www.youtube.com/watch?v=MQiMFs2SIFk",
    totalHours : 255,
    totalVideos : 47,
    level : 'master',
    price : 790.90,
    createdAt : "",
    Students:[
            {
        userImgUrl:'https://img.freepik.com/free-icon/user_318-563642.jpg',
        username:'baba buba'
    } 
    ],
    episodes : [
            {
        id : utilService.makeId(7),
        title : "",
        subTitle : "",
        totalHours:0,
    subEpisodes :[
                {
                    id : utilService.makeId(7),
                    title : "loam loram",
                    subTitle: "nlp gogog loram",
                    videoUrl : "https://www.youtube.com/watch?v=j6ciMNAgq7A"
                }
                ],
            }
    ]
},
{
    _id:utilService.makeId(7),
    title : "NLP Super",
    subTitle : "NLP MIND DESIGN Accredited",
    createdBy : "shlomo shushan",
    courseCoverImg : "https://stoletnik.ru/upload/medialibrary/dfb/dfbf873df0c55598ba080ca12d525ce3.jpg",
    TrailerVideoUrl : "https://www.youtube.com/watch?v=MIl3WGKVBn4",
    totalHours : 255,
    totalVideos : 47,
    level : 'Super',
    price : 290.90,
    createdAt : "",
    Students:[
            {
        userImgUrl:'https://img.freepik.com/free-icon/user_318-563642.jpg',
        username:'baba buba'
    } 
    ],
    episodes : [
            {
        id : utilService.makeId(7),
        title : "nlp bababa",
        subTitle :  "nlp loram kokoko ",
        totalHours:0,
    subEpisodes :[
                {
        id : utilService.makeId(7),
        title : "loam loram",
        subTitle: "nlp gogog loram",
        videoUrl : "https://www.youtube.com/watch?v=j6ciMNAgq7A"
                }
                ],
            }
    ]
}


]
return courses
}

async function getCourses() {
  try{  
    // const courses = await httpService.get('coures')
    const courses = await storageService.query(course_DB)
    return courses
}
    catch(err){
        console.log('could not load courses',err);
        
    }
}
async function getCourseById(couresId) {
    try{
    // const coures = await httpService.get(`coures/${couresId}`)
    const courses = await storageService.query(course_DB)
    const course = courses.find(course => course._id === couresId)
    console.log('your course by id in service ',course);
return course
    } 
    catch(err){
        console.log('could not load coures by id ',err);
        
    }
}