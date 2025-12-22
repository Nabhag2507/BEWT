const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const user = require('./user.js')

app.use(express.json())

mongoose.connect(process.env.mongourl).then(() => {
    console.log("Mongo connection successful");
}).catch((err) => {
    console.log(err);
})
app.post('/register', async (req, res) => {
    const User = new user({
        "name": "nabhag",
        "email": "alkdjsa",
        "password": "asdf",
        "phone": 1234567897
    })
    const newUser = await User.save()

    return res.status(200).json({ message: `Successfully registered ${newUser}` })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
