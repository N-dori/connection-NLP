import React from 'react'
import { FileSvg } from '../svgs/FileSvg'
import { Link } from 'react-router-dom'

export function Resources({ files }) {
    return (

        <section className="files-container flex-col">
            {files.map(file =>
                <article key={file.id} className='file-wrapper flex-sb'>
                    <FileSvg /> <Link  to={file.url} className='file-name'>{file.name}</Link>

                </article>
            )} </section>


    )
}
