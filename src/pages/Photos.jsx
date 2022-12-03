import React, { useContext } from 'react'
import Image from '../components/Image';
import { Context } from '../Context';

const Photos = () => {
  const { allPhotos } = useContext(Context);
  const displayAllImages = allPhotos?.map((photo,i) => {
    return (
      <Image key={photo.id} img={photo} />
    )
  })
  return (
    <div className='grid_container'>
      {displayAllImages}
    </div>
  )
}

export default Photos