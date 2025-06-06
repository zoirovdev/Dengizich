import { useState, useEffect } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	setUsers(data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])


  
  return (
    <div className="m-10 ml-[300px]">
      {users && users.map(user => (
        <div key={user.id} className="mb-4 w-[600px] p-4 border rounded-[5px] border-slate-300 relative">
	  <p className="flex flex-row justify-center"><strong>{user.username}</strong></p>
	  <p className="ml-4">Name <span className="absolute right-8">{user.name}</span></p>
	  <p className="ml-4">Phone <span className="absolute right-8">{user.phone}</span></p>
	  <p className="ml-4">Website <span className="absolute right-8">{user.website}</span></p>
	  <p className="ml-4">Address <span className="absolute right-8">{user.address.street}, {user.address.city}</span></p>
	  <p className="ml-4">Company <span className="absolute right-8">{user.company.name}</span></p>
	</div>
      ))}
    </div>
  )
}


export default Users
