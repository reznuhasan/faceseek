import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import './Blogs.css'
import { blogsItem } from '../../DB/Blogs'
import SearchText from '../SearchText/SearchText'
import axios from 'axios'
const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const seo_content = await axios.get('https://refined-thrill-26de1ae197.strapiapp.com/api/seo-contents?populate=image')
            setBlogs(seo_content.data.data)
        }
        fetchData()
    },[])
    return (
        <div className="blogs-container">
        <SearchText content1='Seo' content2='Content' padding={0}/>
        <div className='blogs'>
                {
                 
                    blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
                 }

        </div>
        </div>
    )
}

export default Blogs
