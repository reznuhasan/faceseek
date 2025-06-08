import React from 'react'

const BlogItem = ({blog}) => {
    const {title,description}=blog
  return (
    <div className='blog-item'>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
    </div>
  )
}

export default BlogItem
