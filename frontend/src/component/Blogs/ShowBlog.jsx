import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/seo-contents');
                const blogs = response.data.data;

                const foundBlog = blogs.find(blog => blog.id === parseInt(id));
                if (foundBlog) {
                    setBlog(foundBlog);
                } else {
                    setError('Blog not found');
                }
            } catch (err) {
                setError('Failed to fetch blog data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='show-blog-container'>
            <h2 className='show-blog-title'>{blog.title}</h2>
            <p className='show-blog-desc'>{blog.description?.[0]?.children?.[0]?.text ?? 'No description available.'}</p>
        </div>
    );
};

export default ShowBlog;
