import React, { useState } from "react";
import { useEffect } from "react";

export function useOnScreen (options) {
    //part 1
    const [ref,setRef] = useState(null)
    const [visible,setVisible] = useState(false)
//part2
    useEffect(() => {
    const observer = new IntersectionObserver(([entry])=>{
        setVisible(entry.isIntersecting)
    },options)
    if(ref){
        observer.observe(ref)
    }
    
      return () => {
       if(ref){
        observer.unobserve(ref)
       }
      }
    }, [ref,visible])
//part3
return [setRef,visible]

    
}