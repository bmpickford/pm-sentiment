import React, { createContext } from 'react';
import * as firebase from 'firebase/app'

import "firebase/analytics";

export const FirebaseContext = createContext({} as firebase.app.App)

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

console.log(process.env.PROJECT_ID)
console.log(firebaseConfig)
console.log(process.env.NODE_ENV)

export const FirebaseProvider = ({ children }: any) => {  
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
    return (
        <FirebaseContext.Provider value={ firebase as any }>
        { children }
        </FirebaseContext.Provider>
    );
}