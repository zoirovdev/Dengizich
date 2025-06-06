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
    <h1>hello</h1>
  )
}


export default PostDetail
