import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id} className="block mb-6 border-b pb-4">
          <p className="text-lg font-semibold break-words whitespace-normal">
	    {post.title}
	  </p>
          <p className="text-gray-700 break-words whitespace-normal">
	    {post.body}
          </p>
        </Link>
      ))}
    </div>
  )
}


export default Post
