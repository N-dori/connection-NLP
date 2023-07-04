import React from 'react'

export  function CouresRequirements({requirements}) {
  return (
   
      <section className='requirements-container'>
        <div className='course-requierments-warpper flex-ac'>

        <h1 className='headline'>דרישות הקורס</h1>

        <ul className="requirements-list flex-col">
          {
           requirements.map(requirement =><li>{requirement}</li> ) 
          }

        </ul>
        </div>

      </section>
        

  
  )
}
