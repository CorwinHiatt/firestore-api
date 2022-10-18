import { initializeApp, cert, getApps } from "firebase-admin/app";        //function for database connection
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount  from "../secrets.js";

export default function dbConnect() {
    if(!getApps().length){
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    return getFirestore()
}

