import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Sidebar from './components/Sidebar.jsx'
import SearchInput from './components/SearchInput.jsx'
import Post from './components/Post.jsx'
import Todos from './components/Todos.jsx'
import Users from './components/Users.jsx'


function App() {
  return (
    <div className="mt-0">
      <Sidebar />
      <SearchInput />
      <Routes>
	<Route path="/" element={<Home/>}/>
	<Route path="/posts" element={<Post/>}/>
	<Route path="/todos" element={<Todos/>}/>
	<Route path="/users" element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default App
