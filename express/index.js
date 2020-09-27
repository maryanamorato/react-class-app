require('./models/Equipment')
const cors = require("cors")
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const equipmentRoutes = require('./routes/equipmentRoutes')

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(equipmentRoutes);

const mongoUri = 'mongodb+srv://maryana:maryana@cluster0.jvotj.gcp.mongodb.net/equipments?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance")
})

mongoose.connection.on('error',(err)=>{
    console.error("Error connecting to mongo ", err)
})

app.listen(3005, () => {
    console.log("Listening on 3005")
})