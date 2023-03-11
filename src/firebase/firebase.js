import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCT5BiOUx-Sy3dPvXWqlyC0_EDrV1Zmsqk",
    authDomain: "chats-6f141.firebaseapp.com",
    projectId: "chats-6f141",
    storageBucket: "chats-6f141.appspot.com",
    messagingSenderId: "187285482906",
    appId: "1:187285482906:web:32bb7f2e916a45ed841e23"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage()