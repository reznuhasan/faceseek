import React from 'react'
import './SearchText.css';

const SearchText = ({content1="",content2="",padding=0}) => {
  return (
    <div className='search-text-component' style={{paddingLeft:`${padding}px`}}>
      <h1>{content1 && content1} {content2 && <span className='result-text'>{content2}</span>}</h1>
    </div>
  )
}

export default SearchText
