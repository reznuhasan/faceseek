import React from 'react'
import Header from '../page/Header/Header'
import SearchBar from '../component/SearchBox/SearchBox'
import SearchText from '../component/SearchText/SearchText'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
