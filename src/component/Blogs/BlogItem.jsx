import React from 'react'

const BlogItem = ({blog}) => {
    const {title,description}=blog
    const desc=description[0]?.children[0].text
  return (
    <div className='blog-item'>
      <h1>{title}</h1>
      <p>
        {desc}
      </p>
    </div>
  )
}

export default BlogItem
