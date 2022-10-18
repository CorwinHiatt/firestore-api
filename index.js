import express from 'express'                           // write a function to connect to data base 
import { createCoffee, getAllCoffees } from './src/coffees.js'

const app = express()
app.use(express.json())

app.post('/coffees', createCoffee)
app.get('/coffees', getAllCoffees)

app.listen(3030, () => console.log('listening on http://localhost:3030...'))