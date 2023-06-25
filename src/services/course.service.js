import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { localStorageService } from "./localStorage.service"
import { utilService } from "./util.service"
const course_DB = 'course'

_setCourses()

export const courseService = {
    getCourses,
    getCourseById,
    updateCoursesStudents,
    getCourseContent,
}

function _setCourses() {
    utilService.saveToStorage(course_DB, _creatCourses())

}
function _creatCourses() {
    const courses = [
        {
            _id: utilService.makeId(9),
            title: "NLP Practitioner/Master",
            subTitle: " קורס למתחילים המשלב מאסטר ופראקטישנר  ",
            createdBy: " בהנחיית שלומי חלאווי מנחה ומרצה מוביל, ושלמה שושן ז'ל מייסד נלפי חיבורים",
            courseCoverImg: "https://top10a.ru/wp-content/uploads/2018/11/2-ispolzujte-nejrolingvisticheskoe-programmirovanie.jpg",
            trailerVideoUrl: "https://www.youtube.com/watch?v=-fgnz2vetPU",
            totalHours: 255,
            totalVideos: 47,
            level: 'Practitioner',
            price: '950.90',
            createdAt: "",
            students: [
                {
                    userImgUrl: 'https://img.freepik.com/free-icon/user_318-563642.jpg',
                    username: 'mama mia'
                }
            ],
            intros: [
                {
                    id: utilService.makeId(8),
                    title: "Getting started with NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the basis of NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the benefits of NLP",
                    videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                },
            ],
            episodes: [
                {
                    id: utilService.makeId(8),
                    title: "fundamentals",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 1,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 2,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "The Art of listining",
                    subTitle: "",
                    totalHours: 45,
                    subEpisodes: [
                        {
                            id: 3,
                            title: "The Art of listining",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=_YEKacO3M-M&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=7"
                        },
                        {
                            id: 4,
                            title: "NLP throgth games",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=cayBOMFrR9A&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=10"
                        },
                        {
                            id: 5,
                            title: "easy start with NLP",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=h9wiLS1o1Rw&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=9"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP if life",
                    subTitle: "",
                    totalHours: 55,
                    subEpisodes: [
                        {
                            id: 6,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 7,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "iHow to start with NLP",
                    subTitle: "",
                    totalHours: 70,
                    subEpisodes: [
                        {
                            id: 8,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 9,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP Be present",
                    subTitle: "",
                    totalHours: 28,
                    subEpisodes: [
                        {
                            id: 10,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 11,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ]
                },
                {
                    id: utilService.makeId(7),
                    title: "easy start with NLP",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 12,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 13,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP Be present",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 14,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 15,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP throgth games",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 16,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 17,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "Course summery NLP-master",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 18,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 19,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: " NLP and Ajax",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 20,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 21,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "The Art of listining",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 22,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 23,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "Course summery NLP-master",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 24,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 25,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "How to start with NLP",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 26,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 27,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                }
            ],
            freeSamples: [
                {
                    id: utilService.makeId(8),
                    title: "the basis of NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the benefits of NLP",
                    videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=f2VLQF-GP5A"
                },
                {
                    id: utilService.makeId(8),
                    title: "easy start with NLP",
                    videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=j6ciMNAgq7A"
                },

            ]
        },
        {
            _id: utilService.makeId(9),
            title: "  קורס אדוונס למתקדמים ומטפלים",
            subTitle: "טיפול עומק בחמישה שלבים",
            createdBy: "בהנחיית שלמה שושן ז'ל",
            courseCoverImg: "https://avatars.mds.yandex.net/i?id=9e64dca9169ac79f7e861e117e656d86efc44ff2-4568991-images-thumbs&n=13",
            trailerVideoUrl: "https://www.youtube.com/watch?v=MQiMFs2SIFk",
            totalHours: 255,
            totalVideos: 47,
            level: 'master',
            price: '2950.90',
            createdAt: "",
            students: [
                {
                    userImgUrl: 'https://img.freepik.com/free-icon/user_318-563642.jpg',
                    username: '???'
                }
            ],
            intros: [
                {
                    id: utilService.makeId(8),
                    title: "Getting started with NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the basis of NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the benefits of NLP",
                    videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                },
            ],
            episodes: [
                {
                    id: utilService.makeId(8),
                    title: "fundamentals",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 1,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 2,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "The Art of listining",
                    subTitle: "",
                    totalHours: 45,
                    subEpisodes: [
                        {
                            id: 3,
                            title: "The Art of listining",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=_YEKacO3M-M&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=7"
                        },
                        {
                            id: 4,
                            title: "NLP throgth games",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=cayBOMFrR9A&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=10"
                        },
                        {
                            id: 5,
                            title: "easy start with NLP",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=h9wiLS1o1Rw&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=9"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP if life",
                    subTitle: "",
                    totalHours: 55,
                    subEpisodes: [
                        {
                            id: 6,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 7,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "iHow to start with NLP",
                    subTitle: "",
                    totalHours: 70,
                    subEpisodes: [
                        {
                            id: 8,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 9,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP Be present",
                    subTitle: "",
                    totalHours: 28,
                    subEpisodes: [
                        {
                            id: 10,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 11,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ]
                },
                {
                    id: utilService.makeId(7),
                    title: "easy start with NLP",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 12,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 13,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP Be present",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 14,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 15,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP throgth games",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 16,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 17,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "Course summery NLP-master",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 18,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 19,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: " NLP and Ajax",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 20,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 21,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "The Art of listining",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 22,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 23,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "Course summery NLP-master",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 24,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 25,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "How to start with NLP",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 26,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 27,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                }
            ],
            freeSamples: [
                {
                    id: utilService.makeId(8),
                    title: "the basis of NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the benefits of NLP",
                    videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=f2VLQF-GP5A"
                },
                {
                    id: utilService.makeId(8),
                    title: "easy start with NLP",
                    videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=j6ciMNAgq7A"
                },

            ],

        },
        {
            _id: utilService.makeId(7),
            title: "סקריפטים למטפלים לעבודה בקליניקה לרכישה והורדה ",
            subTitle: "כלים ושיטות עבודה לקליניקה כגון גולדן בוקס עבודה עם ציר הזמן ועוד",
            createdBy: "shlomo shushan",
            courseCoverImg: "https://stoletnik.ru/upload/medialibrary/dfb/dfbf873df0c55598ba080ca12d525ce3.jpg",
            trailerVideoUrl: "https://www.youtube.com/watch?v=MIl3WGKVBn4",
            totalHours: 255,
            totalVideos: 47,
            level: 'Super',
            price: '290.90',
            createdAt: "",
            students: [
                {
                    userImgUrl: 'https://img.freepik.com/free-icon/user_318-563642.jpg',
                    username: 'baba buba'
                }
            ],
            intros: [
                {
                    id: utilService.makeId(8),
                    title: "Getting started with NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the basis of NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the benefits of NLP",
                    videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                },
            ],
            episodes: [
                {
                    id: utilService.makeId(8),
                    title: "fundamentals",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 1,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 2,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "The Art of listining",
                    subTitle: "",
                    totalHours: 45,
                    subEpisodes: [
                        {
                            id: 3,
                            title: "The Art of listining",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=_YEKacO3M-M&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=7"
                        },
                        {
                            id: 4,
                            title: "NLP throgth games",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=cayBOMFrR9A&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=10"
                        },
                        {
                            id: 5,
                            title: "easy start with NLP",
                            videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=h9wiLS1o1Rw&list=PLaPc6gByEEX1kunqmvYTcSYq1SmWa9-ej&index=9"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP if life",
                    subTitle: "",
                    totalHours: 55,
                    subEpisodes: [
                        {
                            id: 6,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 7,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "iHow to start with NLP",
                    subTitle: "",
                    totalHours: 70,
                    subEpisodes: [
                        {
                            id: 8,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 9,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP Be present",
                    subTitle: "",
                    totalHours: 28,
                    subEpisodes: [
                        {
                            id: 10,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 11,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ]
                },
                {
                    id: utilService.makeId(7),
                    title: "easy start with NLP",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 12,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 13,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP Be present",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 14,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 15,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "NLP throgth games",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 16,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 17,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "Course summery NLP-master",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 18,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 19,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: " NLP and Ajax",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 20,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 21,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "The Art of listining",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 22,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 23,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "Course summery NLP-master",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 24,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 25,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                },
                {
                    id: utilService.makeId(7),
                    title: "How to start with NLP",
                    subTitle: "",
                    totalHours: 20,
                    subEpisodes: [
                        {
                            id: 26,
                            title: "the basis of NLP",
                            videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                        },
                        {
                            id: 27,
                            title: "the benefits of NLP",
                            videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                            videoUrl: "https://www.youtube.com/watch?v=twIWSU-xf_o"
                        },
                    ],
                }
            ],
            freeSamples: [
                {
                    id: utilService.makeId(8),
                    title: "the basis of NLP",
                    videoImg: "https://gagaru.club/uploads/posts/2023-02/1676354761_gagaru-club-p-trening-krasivaya-rech-vkontakte-3.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=CMrHM8a3hqw"
                },
                {
                    id: utilService.makeId(8),
                    title: "the benefits of NLP",
                    videoImg: "https://витилемна.рф/wp-content/uploads/2018/03/conference-2705706_1920.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=f2VLQF-GP5A"
                },
                {
                    id: utilService.makeId(8),
                    title: "easy start with NLP",
                    videoImg: "https://alev.biz/wp-content/uploads/2021/01/public-speaking.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=j6ciMNAgq7A"
                },

            ]
        }


    ]
    return courses
}

async function getCourses(filterBy) {
    try {
        // const courses = await httpService.get('coures')
        const courses = await storageService.query(course_DB)
        return courses
    }
    catch (err) {
        console.log('could not load courses', err);

    }
}
async function getCourseContent(currCourseId, filterBy) {
    try {
        // const courses = await httpService.get('coures')
        if (!filterBy) {
            return
        }
        const course = await getCourseById(currCourseId)
        const { episodes } = course
        const { title } = filterBy
        let matches = []
        if (title) {
            episodes.forEach(episode => {
                if (episode.title.includes(title)) {
                    if (!utilService.isFuond(matches, episode.id)) {
                        matches.push(episode)
                    }
                }
                episode.subEpisodes.map(subEpisod => {
                    if (subEpisod.title.includes(title)) {
                        if (!utilService.isFuond(matches, episode.id)) {
                            matches.push(episode)
                        }
                    }
                    console.log('filterBy in service', matches);
                })
            })
            return matches
        }
    }
    catch (err) {
        console.log('could not search content', err);
    }
}
async function getCourseById(couresId) {
    try {
        // const coures = await httpService.get(`coures/${couresId}`)
        const courses = await storageService.query(course_DB)
        const course = courses.find(course => course._id === couresId)
        console.log('your course by id in service ', course);
        return course
    }
    catch (err) {
        console.log('could not load coures by id ', err);

    }
}

function _updateCourse(loggdingUser, courseToUpdate) {
    try {
        courseToUpdate.students.push({
            id: loggdingUser._id,
            fname: loggdingUser.fname,
            ImgUrl: loggdingUser.imgUrl
        })
        return courseToUpdate

    }
    catch (err) {
        console.log('could not _update Course ', err);

    }
}
async function updateCoursesStudents(loggdingUser, shoppingCart) {
    try {
        // const coures = await httpService.get(`coures/${couresId}`)

        //first getting all relevent courses that needs to be updeted
        // from data base into array coursesToUpdate
        const courses = await storageService.query(course_DB)
        console.log('coursesToUpdate in course service', courses);
        let coursesToUpdate = [];
        shoppingCart.forEach(product => {
            let courseToUpdate = courses.find(course => course._id === product.course._id)
            coursesToUpdate.push(courseToUpdate)
        });

        // each get send to local func to be updated with their students
        // and get pushed to local array = updatdtedCourses
        let updatdtedCourse
        let updatdtedCourses = []
        coursesToUpdate.forEach(course => {
            updatdtedCourse = _updateCourse(loggdingUser, course)
            updatdtedCourses.push(updatdtedCourse)
        },
            // at this point updating the origenal array with the updated courses and saving to storage 
            updatdtedCourses.forEach(updatdtedCourse => {
                courses.map(currCourse => currCourse._id === updatdtedCourse._id ? updatdtedCourse : currCourse)
            }))
        localStorageService.store(course_DB, courses)
        console.log('coursesToUpdate in course service', courses);
        return courses
    }
    catch (err) {
        console.log('could not Update coures by id ', err);

    }
}