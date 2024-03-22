const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json())
app.use(cors({
    origin:'*',
    methods:'GET,POST,PUT,DELETE',
    credentials:true
}))

app.get('/test',(req,res)=>{
    res.status(200).json({message:'server works!'})
})

app.listen(8080,'127.0.0.1',()=>{
    console.log(`listening to port ${8080}`)
})