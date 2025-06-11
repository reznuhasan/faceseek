import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // ← Import this
import { markdownComponent } from '../../Helper/Helper';
const BlogItem = ({ blog }) => {
  const { Title, Description, Slug, image } = blog;
  const { url } = image
  // const desc = description?.[0]?.children?.[0]?.text ?? 'No description available.';
  const first50Words = Description.slice(0, 250);
  return (
    <div className='blog-item'>
      <Link to={`/blog/${Slug}`}>
        <h1>{Title}</h1>
      </Link>
      <p></p>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]} // ← Enable raw HTML
        components={markdownComponent}
      >{first50Words}</ReactMarkdown>
      <img src={url} alt='random image' />
    </div>
  );
};

export default BlogItem;
