import React from 'react';
import { Link } from 'react-router-dom';
import demoImage from "../../assets/demoImage.png"

const BlogItem = ({ blog }) => {
  const { title, description, id } = blog;
  const desc = description?.[0]?.children?.[0]?.text ?? 'No description available.';

  return (
    <div className='blog-item'>
      <Link to={`/blog/${id}`}>
        <h1>{title}</h1>
      </Link>
      <p>{desc.substring(0, 350)}...</p>
      <img src={demoImage} alt='random image'/>
    </div>
  );
};

export default BlogItem;
