import React from 'react'
import BlogItem from './BlogItem'
import './Blogs.css'
import { blogsItem } from '../../DB/Blogs'
import SearchText from '../SearchText/SearchText'
const Blogs = () => {
    const blogs = blogsItem
    return (
        <div className="blogs-container">
        <SearchText content1='Blogs' padding={0}/>
        <div className='blogs'>
                {
                    blogs.map((blog, index) => <BlogItem key={index} blog={blog} />)
                }

        </div>
        </div>
    )
}

export default Blogs
