export const fileUpload = async (file) => {
  if (!file) throw new Error('No tenemos ningun archivo a subir')
  // url de nuestro servicio en cloudinary
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dnon1lss2/upload'
  // creamos el cuerpo de nuestra peticion
  const formData = new FormData()
  // configuramos el enterno de cloudinary
  formData.append('upload_preset', 'react-journal')
  // aregamos nuestros archivos
  formData.append('file', file)

  try {
    // hacemos la peticion POST para subir el archivo
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })
    // console.log(resp)
    if (!resp.ok) throw new Error('No se pudo subir imagen')
    const cloudResp = await resp.json()
    // console.log(cloudResp)
    // retornamos la url que guardaremos en firebase
    return cloudResp.secure_url
  } catch (error) {
    throw new Error(error.message)
  }
}
