import { Link } from 'react-router-dom'
import { UsersIcon } from '@heroicons/react/24/outline'


const Sidebar = () => {
  return (
    <div className="float-left w-64 bg-white fixed left-0 top-0 h-full border-r-2 border-slate-200 pt-8">
      <h1 className="font-mono text-xl mb-4 pl-8">Dengizich</h1>
      <ul className="">
	<li className="hover:bg-slate-200 pl-8 py-2 cursor-pointer">
          <Link to="/" className="flex flex-row gap-2 ">
	    <img src="home.svg" alt="home" className="w-5"/>
	    <p className="text-base">Home</p>
	  </Link>
	</li>
	<li className="hover:bg-slate-200 pl-8 py-2 cursor-pointer">
	  <Link to="/posts" className="flex flex-row gap-2 ">
	    <img src="post.svg" alt="posts" className="w-5"/>
	    <p className="text-base">Posts</p>
	  </Link>
	</li>
	<li className="hover:bg-slate-200 pl-8 py-2 cursor-pointer">
	  <Link to="/todos" className="flex flex-row gap-2 ">
	    <img src="todo.svg" alt="todo" className="w-5"/>
	    <p className="text-base">Todos</p>
	  </Link>
	</li>
	<li className="hover:bg-slate-200 pl-8 py-2 cursor-pointer">
	  <Link to="/users" className="flex flex-row gap-2">
	    <UsersIcon className="w-5 h-5"/>
	    <p className="text-base">Users</p>
	  </Link>
	</li>
      </ul>
    </div>
  )
}


export default Sidebar
