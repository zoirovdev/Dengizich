import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="float-left w-64 bg-white h-dvh border-r-2 border-cyan-50">
      <h1 className="font-mono text-xl mb-4 pl-8">Dengizich</h1>
      <ul className="">
	<li className="hover:bg-cyan-200 pl-8 py-2 cursor-pointer">
          <Link to="/" className="flex flex-row gap-2 ">
	    <img src="home.svg" alt="home" className="w-5"/>
	    <p className="text-base">Home</p>
	  </Link>
	</li>
	<li className="hover:bg-cyan-200 pl-8 py-2 cursor-pointer">
	  <Link to="/shared" className="flex flex-row gap-2 ">
	    <img src="shared.svg" alt="shared" className="w-5"/>
	    <p className="text-base">Shared</p>
	  </Link>
	</li>
	<li className="hover:bg-cyan-200 pl-8 py-2 cursor-pointer">
	  <Link to="/recent" className="flex flex-row gap-2 ">
	    <img src="recent.svg" alt="recent" className="w-5"/>
	    <p className="text-base">Recent</p>
	  </Link>
	</li>
	<li className="hover:bg-cyan-200 pl-8 py-2 cursor-pointer">
	  <Link to="/trash" className="flex flex-row gap-2 ">
	    <img src="trash.svg" alt="trash" className="w-5"/>
	    <p className="text-base">Trash</p>
	  </Link>
	</li>
      </ul>
    </div>
  )
}


export default Sidebar
