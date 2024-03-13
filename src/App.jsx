import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookMarks = (bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  }

  return (
    <>
      <Header></Header>
      <Blogs handleBookMarks={handleBookMarks} bookmarks={bookmarks}></Blogs>
    </>
  )
}

export default App
