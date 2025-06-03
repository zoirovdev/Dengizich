import { useState, useEffect } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'


const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
	const data = await response.json()
	setTodos(data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  return (
    <div className="ml-[270px] p-8">
      {todos.map(todo => (
        <div key={todo.id} 
	  className="flex flex-row p-2 border-1 border-slate-300 rounded-[5px] mb-3 gap-4 w-[650px] relative">
	  <p>{todo.title}</p>
	  {todo.completed ? (
  	    <CheckCircleIcon className="absolute right-2 w-6 h-6 text-green-500" />
          ) : (
            <XCircleIcon className="absolute right-2 w-6 h-6 text-gray-400" />
          )}	
	</div>
      ))}
    </div>
  )
}


export default Todos
