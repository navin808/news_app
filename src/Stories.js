import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='stories'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
           <b> Author &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  :   </b>{author}<span><br/> 
           <b> People Viewed &nbsp;  &nbsp;  &nbsp;: </b>{points} <br/> 
           <b>Comments &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;:  </b> {num_comments}{' '} </span>
             
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button
                className='remove-btn'
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
