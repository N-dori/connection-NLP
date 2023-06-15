import React, { useState } from 'react'
import { SearchSvg } from '../svgs/SearchSvg'

export function SearchContent() {
  const [term, setTerm] = useState("")
  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    setTerm(value)
  }
  return (
    <section className='search-contanet-contianer'>
      <main className='search-contanet-wrapper flex-col'>
        <div className='input-container flex'>
          <input className='search-input'
            onChange={handleChange} value={term} type="text" name="term" id="term" placeholder='Search' />
          <div className='search-svg-container flex-jc-ac'>
            <SearchSvg />

          </div>

        </div>
        <div className='start-new-search-wrapper flex-col'>
          <span className='start-new-search'>Start new Search</span>
          <span className='sub-text'>To find caption, lectures or resources </span>
        </div>
      </main>
    </section>
  )
}
