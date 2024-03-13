import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookMarks = (bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  }

  const handleReadTime = (blog) => {
    const readingTime = blog.reading_time;
    setReadTime(readTime + readingTime);
  }

  return (
    <>
      <Header></Header>
      <Blogs handleBookMarks={handleBookMarks} handleReadTime={handleReadTime} bookmarks={bookmarks} readTime={readTime}></Blogs>
    </>
  )
}

export default App
