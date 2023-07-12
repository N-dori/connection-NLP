import React, { useEffect, useState } from 'react'
import { eventBus, SHOW_MSG } from "../services/event-bus.service.js"

export  function UserMsg() {
const [msg,setMsg] = useState(null)
const [alive,setAlive] = useState(false)


useEffect(() => {
 eventBus.on(SHOW_MSG, (msg) => {
    console.log( 'eventbus', msg);
      setMsg( msg)
      var delay = msg.delay || 6000
      setAlive(true)
      setTimeout(() => {
          setAlive(false)
      }, 5000)
    })
}, [])


  return (
    alive?<section  className={msg?`msg-container-${msg.type}`:'msg-container-'}>
    <div className='msg-wrapper'>
      <span className='msg'>{msg.txt}</span>
    </div>
  </section>:''
  )
}
