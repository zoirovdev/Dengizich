import { useState, useEffect } from 'react'



const AlbumCard = ({ id }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
	const data = await response.json()
	setPhotos(data.slice(0,3))
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
	  <img src={photo.url} alt='pic' className="h-8 w-8"/>
	</div>
      ))}
    </div>
  )
}



export default AlbumCard
