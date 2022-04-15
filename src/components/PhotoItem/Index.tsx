import React from 'react'
import { deleteItem } from '../../services/photos';
import { Container } from './styles'

type Props = {
  url: string;
  name: string
}

export default function PhotoItem({ url, name }: Props) {

  const deletephoto = async () => {
    deleteItem(name).then(()=> {
      window.location.reload()
    })

  }

  return (
    <Container>

      <img src={url} alt={name} />
      
      <div className='name-photo'>
        {name}
      </div>

      <button onClick={deletephoto}>
        X
      </button>
      
    </Container>
  )
}
