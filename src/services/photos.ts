import { Photo } from "../types/Photo"
import { storage } from "../db/firebase"
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const getAll = async () => {
  let list: Photo[] = []

  //referenciar no banco de dados onde os arquivos estão
  const imagesFolder = ref(storage, "images")
  
  const photoList = await listAll(imagesFolder)

  for (let i in photoList.items) {
    let photoURL = await getDownloadURL(photoList.items[i])

    list.push({
      name: photoList.items[i].name,
      url: photoURL,
    })
  }

  return list
}