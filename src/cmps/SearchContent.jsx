import React, { useEffect, useState } from 'react'
import { SearchSvg } from '../svgs/SearchSvg'
import { Leasson } from './Leasson'
import { useDebounce } from '../customHooks/usedebounce'

export function SearchContent(props) {
  const [filterBy, setFilterBy] = useState(null)
  const searchQuery = useDebounce(filterBy, 500)
  useEffect(() => {
    setFilterBy({filterBy:{ ...props.filterBy } })
  }, [])

  useEffect(() => {
  
 props.onChangeFilter(searchQuery)

      }, [searchQuery])

  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    setFilterBy((preFilterBy) => ({ ...preFilterBy, [field]:value }))
  }


  return (
    filterBy?
    <section className='search-contanet-contianer grid'>
      <main className='search-contanet-wrapper flex-col'>
        <div className='input-container flex'>
          <input className='search-input'
            onChange={handleChange} value={filterBy.title} type="text" name="title" id="title" placeholder='חפש' />
          <div className='search-svg-container flex-jc-ac'>
            <SearchSvg />

          </div>

        </div>
      </main>
      {
        props.content?
        (props.content.length===0)?<span className='not-found'>תוכן לא נמצא </span>:
        <section className='content-container flex-col'>
        { props.content.map((episode,i) => {
         return  <Leasson key={episode.id}
                          setVideoUrl={props.setVideoUrl}
                          title={episode.title}
                          subEpisodes={episode.subEpisodes} 
                          lectures={episode.subEpisodes.length}
                          min={27}
                          isSearchPanel={true}/>
        }) }
        </section>:<div className='start-new-search-wrapper flex-col'>
          <span className='start-new-search'>התחל חיפוש חדש</span>
          <span className='sub-text'> חפש כתוביות, הרצאות מקורות</span>
        </div>
      }
    </section>:<div>Loading...</div>

    
  )
}
