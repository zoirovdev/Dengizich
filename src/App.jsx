import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Sidebar from './components/Sidebar.jsx'


function App() {
  return (
    <div className="mt-0">
      <Sidebar />
      <Routes>
	<Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
