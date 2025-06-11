import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // ← Import this
import { markdownComponent } from '../../Helper/Helper';


const ShowBlog = () => {
    const { Slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://refined-thrill-26de1ae197.strapiapp.com/api/seo-contents?populate=image');
                const blogs = response.data.data;
                const foundBlog = blogs.find(blog => blog.Slug === Slug);
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
    }, [Slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='show-blog-container'>
            <h2 className='show-blog-title'>{blog.Title}</h2>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]} // ← Enable raw HTML
                components={markdownComponent}

            >{blog.Description}</ReactMarkdown>
        </div>
    );
};

export default ShowBlog;
