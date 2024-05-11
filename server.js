import express from 'express';
import FileUpload from 'express-fileupload'
//import mysql from 'mysql'
import cors from'cors'
import ProductRoute from "./routes/ProductRoute.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(FileUpload)
app.use(express.static("public")) //pour les images
app.use(ProductRoute)



app.listen(5000,()=>{
    console.log('listening')
    console.log('Server started on port 5000')

})
