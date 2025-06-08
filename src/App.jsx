import SearchBar from "./component/SearchBox/SearchBox"
import SearchText from "./component/SearchText/SearchText"
import Email from "./page/Email/Email"
import Header from "./page/Header/Header"


function App() {

  return (
    <>
    <Header/>
    <SearchBar/>
    <SearchText content1={"Search"} content2={"Result"} padding={104}/>
    <Email/>
    </>
  )
}

export default App
