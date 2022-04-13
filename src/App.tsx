import { useEffect, useState } from "react";
import { Container, Content, Header, PhotoList, ScreenWarning } from "./styles/App.styles"
import * as Photos from './services/photos'
import { Photo } from "./types/Photo";

export default function App() {

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(()=>{
    const getPhotos = async () => {
      setLoading(true)

      setPhotos(await Photos.getAll())

      setLoading(false)
    }

    getPhotos()

  },[])


  return (
    <Container>
      <Content>

        <Header>
          Galeria de fotos
        </Header>

        {/* Area de upload */}

        {loading && 
        <ScreenWarning>
          <div className="emoji">🤚</div>
          <div>Carregando...</div>
        </ScreenWarning>
        }

        {!loading && photos.length > 0 &&
        <PhotoList>
          {photos.map((photo, index) => (
            <div>{photo.name}</div>
          ))}
        </PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreenWarning>
            <div className="emoji">📸</div>
            <div>Não há fotos cadastradas.</div>
          </ScreenWarning>
        }

      </Content>
    </Container>
  );
}
