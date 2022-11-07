import { initializeApp } from "firebase/app";

class FirebaseConnection {
	initialize() {
        console.log('INICIANDO FIREBASE');
        initializeApp({
              apiKey: "AIzaSyDW9XASGkICV016jeqKqCd7IqXVUgvMqLo",
              authDomain: "copei-4608c.firebaseapp.com",
              projectId: "copei-4608c",
              storageBucket: "copei-4608c.appspot.com",
              messagingSenderId: "732327879586",
              appId: "1:732327879586:web:4e8f5e9c224e3b7a7748fb",
              measurementId: "G-PS5DBL82YJ"
        });
	}
}

// Registro dos services
export default ({ }, inject) => {
    let firebaseConnection = new FirebaseConnection();
    firebaseConnection.initialize();
	inject('firebaseConnetion', firebaseConnection);
}