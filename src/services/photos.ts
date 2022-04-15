import { Photo } from "../types/Photo"
import { storage } from "../db/firebase"
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { v4 as createId } from 'uuid'

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

export const insert = async (file: File) => {
  if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

    let randomName = createId()
    let newFile = ref(storage, `images/${randomName}`)

    let upload = await uploadBytes(newFile, file)
    let photoUrl = await getDownloadURL(upload.ref)

    return {
      name: upload.ref.name,
      url: photoUrl
    } as Photo

  } else {
    return new Error('Tipo de arquivo não permitido, somente JPEG, JPG e PNG')
  }
}

export const deleteItem = async ( name: string ) => {
  const photodelete = ref(storage, `images/${name}`)

  await deleteObject(photodelete)
}