import { initializeApp, cert, getApp } from "firebase-admin/app";        //function for database connection
import { getFirestore } from "firebase-admin/firestore";

import { ServiceAccount } from "../secrets.js";

export default function dbConnect() {
    if(!getApp().length){
        initializeApp({
            credential: cert(ServiceAccount)
        })
    }
    return getFirestore()
}

