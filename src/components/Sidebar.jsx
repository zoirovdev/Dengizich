


const Sidebar = () => {
  return (
    <div className="float-left w-64 bg-white h-dvh border-r-2 border-cyan-50">
      <h1 className="font-mono text-xl mb-4 pl-8">Dengizich</h1>
      <ul className="">
	<li className="flex flex-row gap-2 hover:bg-cyan-200 pl-8 py-2">
	  <img src="home.svg" alt="home" className="w-5"/>
	  <p className="text-base">Home</p>
	</li>
	<li className="flex flex-row gap-2 hover:bg-cyan-200 pl-8 py-2">
	  <img src="shared.svg" alt="shared" className="w-5"/>
	  <p className="text-base">Shared</p>
	</li>
	<li className="flex flex-row gap-2 hover:bg-cyan-200 pl-8 py-2">
	  <img src="recent.svg" alt="recent" className="w-5"/>
	  <p className="text-base">Recent</p>
	</li>
	<li className="flex flex-row gap-2 hover:bg-cyan-200 pl-8 py-2">
	  <img src="trash.svg" alt="trash" className="w-5"/>
	  <p className="text-base">Trash</p>
	</li>
      </ul>
    </div>
  )
}


export default Sidebar
