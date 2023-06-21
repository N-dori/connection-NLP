import React, { useEffect, useState } from 'react'

import { AnnouncementsPreview } from './AnnouncementsPreview'

export function AnnouncementsList({loggedinUser,courseAnnouncements }) {
  
    return (

        <section className='profile-announcement-container'>
            {/* <h1 className='headline'>Announcements:</h1> */}
            {courseAnnouncements.map(announcement => {
           return <AnnouncementsPreview loggedinUser={loggedinUser} announcement={announcement}/>

                
            })}
        </section>


    )
}
