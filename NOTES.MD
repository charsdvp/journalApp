Instalaremos Firebase en nuestro proyecto con el siguiente comando `npm install firebase`

Tendremos que añadir una carpeta **firebase** y dentro de ella un archivo **config.js** con algo similar como lo siguiente: 
```js
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkCFcnSzp61x66CP5bdOLUgxr3TJ3A0WU',
  authDomain: 'react-cursos420.firebaseapp.com',
  projectId: 'react-cursos420',
  storageBucket: 'react-cursos420.appspot.com',
  messagingSenderId: '556809450814',
  appId: '1:556809450814:web:ccb7fb1032d265a27fa86f'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)

```

Si suben la app a Vercel y encuentran un problema al crear una nueva nota, pueden probar a solucionarlo agregando imageUrls: [] en el archivo store/journal/thunks.js en la función "startNewNote"

const newNote = {
    title: "",
    body: "",
    imageUrls: [],
    date: new Date().getTime()
 };
