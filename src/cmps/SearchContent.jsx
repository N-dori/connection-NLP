import React, { useState } from 'react'

export  function SearchContent() {

  const [term, setTerm] = useState("")
  const  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
    


            setTerm(value)   
    }
  return (
    <section className='search-contanet-contianer'>

      <label htmlFor="term">Search</label>
        <input onChange={handleChange} value={term} type="text" name="term" id="term" />
    </section>
  )
}
