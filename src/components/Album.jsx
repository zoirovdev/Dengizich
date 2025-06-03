import { useState, useEffect } from 'react'
import AlbumCard from './AlbumCard.jsx'

const Album = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        const data = await response.json()
	setAlbums(data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])


  return (
    <div className="ml-[270px]">
      {albums.map((album) => (
	<div key={album.id} className="p-4">
	  <p><strong>{album.title}</strong></p>
	  <AlbumCard id={album.id}/>
	</div>
      ))}
    </div>
  )
}



export default Album
