import { useState, useEffect } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

const Post = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json()
	setPosts(data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()

  }, [])
  
  
  return (
    <div className="ml-[270px] p-8 static">
      <PlusIcon className="w-[38px] h-[38px] absolute top-[25px] right-[350px] bg-slate-200 p-1 rounded-[5px]"/>
      {posts.map((post) => (
        <div key={post.id} className="mb-6 border-b pb-4">
          <p className="text-lg font-semibold break-words whitespace-normal">
	    {post.title}
	  </p>
          <p className="text-gray-700 break-words whitespace-normal">
	    {post.body}
          </p>
        </div>
      ))}
    </div>
  )
}


export default Post
