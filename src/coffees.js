import dbConnect from "./dbConnect.js";
export function createCoffee(req, res) {
    
    //connect to firestore 
    const db = dbConnect()
    //add a new doc to coffees collection
    //send back a response (error/not)
}