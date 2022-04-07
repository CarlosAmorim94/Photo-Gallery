import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBRrHYRTtASGHpJ56bc8z6OmSPR1gNe7o8",
  authDomain: "gallery-53184.firebaseapp.com",
  projectId: "gallery-53184",
  storageBucket: "gallery-53184.appspot.com",
  messagingSenderId: "526215389542",
  appId: "1:526215389542:web:4bd08a3537556a80e0e8a7"
};

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)