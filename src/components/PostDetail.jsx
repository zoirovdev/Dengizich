import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!post) return <p>Post not found</p>

  console.log(post)
  return (
    <div className="ml-[300px] mt-[40px] p-4 w-[600px] border border-slate-300 rounded-[5px]">
      <p className="bg-gray-200 mb-4 p-2">{post.title}</p>
      <p className="border-x border-slate-300 p-2">{post.body}</p>
    </div>
  )
}


export default PostDetail
