import ShowBlog from "./component/Blogs/ShowBlog";
import SearchBar from "./component/SearchBox/SearchBox"
import SearchText from "./component/SearchText/SearchText"
import RootLayout from "./outlet/RootLayout";
import Home from "./outlet/RootLayout";
import Email from "./page/Email/Email"
import Header from "./page/Header/Header"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:([
        {
          path:"/",
          element:<Email/>
        },
        {
          path:"/blog/:Slug",
          element:<ShowBlog/>
        }
      ])
    },
    {
     
    }
  ])
  return (
    <>
    {/* <Header/>
    <SearchBar/>
    <SearchText content1={"Search"} content2={"Result"} padding={104}/>
    <Email/> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
