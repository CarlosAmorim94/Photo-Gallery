import { useEffect, useState, FormEvent } from "react";
import { Container, Content, Header, PhotoList, ScreenWarning, UploadForm } from "./styles/App.styles";
import * as Photos from './services/photos'
import { Photo } from "./types/Photo";
import PhotoItem from "./components/PhotoItem/Index";

import Lottie from 'react-lottie';
import loadingImg from "./assets/Lottie/loadingLottie.json";
import uploadImg from "./assets/Lottie/uploadingLottie.json";
import noPhoto from "./assets/Lottie/noPhoto.json";

export default function App() {

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(()=>{
    const getPhotos = async () => {
      setLoading(true)

      setPhotos(await Photos.getAll())

      setLoading(false)
    }

    getPhotos()

  },[])

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()


    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File

    if(file && file.size > 0) {
      setUploading(true)
        let result = await Photos.insert(file)
      setUploading(false)

      if( result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }


  return (
    <Container>
      <Content>

        <Header>
          Galeria de fotos
        </Header>

        <UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && 
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: uploadImg,
              }}
              />
          }
        </UploadForm>

        {loading && 
        <ScreenWarning>
          <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loadingImg,
              }}
              />
          <div>Carregando...</div>
        </ScreenWarning>
        }

        {!loading && photos.length > 0 &&
        <PhotoList>
          {photos.map((item, index) => (
            <PhotoItem key={index} url={item.url} name={item.name} />
          ))}
        </PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreenWarning>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: noPhoto,
              }}
              />
            <div>Não há fotos cadastradas.</div>
          </ScreenWarning>
        }

      </Content>
    </Container>
  );
}
