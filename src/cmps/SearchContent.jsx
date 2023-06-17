import React, { useEffect, useState } from 'react'
import { SearchSvg } from '../svgs/SearchSvg'
import { courseService } from '../services/course.service'
import { Panel } from './Panel'
import { Leasson } from './Leasson'

export function SearchContent(props) {
  const [filterBy, setFilterBy] = useState(null)

  useEffect(() => {
    setFilterBy({filterBy:{ ...props.filterBy } })
  }, [])

  useEffect(() => {
    props.onChangeFilter(filterBy)
      }, [filterBy])

  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    setFilterBy((preFilterBy) => ({ ...preFilterBy, [field]:value }))
  }


  return (
    filterBy?
    <section className='search-contanet-contianer flex-col'>
      <main className='search-contanet-wrapper flex-col'>
        <div className='input-container flex'>
          <input className='search-input'
            onChange={handleChange} value={filterBy.title} type="text" name="title" id="title" placeholder='Search' />
          <div className='search-svg-container flex-jc-ac'>
            <SearchSvg />

          </div>

        </div>
      { props.content? "": <div className='start-new-search-wrapper flex-col'>
          <span className='start-new-search'>Start new Search</span>
          <span className='sub-text'>To find caption, lectures or resources </span>
        </div>}
      </main>
      {
        props.content?<section className='content-container flex-col'>
        { props.content.map(episode => {
         return  <Leasson setVideoUrl={props.setVideoUrl} title={episode.title} subEpisodes={episode.subEpisodes} lectures={episode.subEpisodes.length} min={27}/>
        }) }
        </section>:<div>Loading</div>
      }
    </section>:<div>Loading...</div>

    
  )
}
