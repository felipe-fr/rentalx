import express from 'express'

const app = express()

app.listen(3000)

app.get("/", (request,response) =>{
    response.json({msg:"It's Working"})
})