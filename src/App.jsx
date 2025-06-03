import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Sidebar from './components/Sidebar.jsx'
import SearchInput from './components/SearchInput.jsx'
import Album from './components/Album.jsx'
import Post from './components/Post.jsx'
import Trash from './components/Trash.jsx'


function App() {
  return (
    <div className="mt-0">
      <Sidebar />
      <SearchInput />
      <Routes>
	<Route path="/" element={<Home/>}/>
	<Route path="/posts" element={<Post/>}/>
	<Route path="/album" element={<Album/>}/>
	<Route path="/trash" element={<Trash/>}/>
      </Routes>
    </div>
  )
}

export default App
