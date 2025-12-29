const express = require('express')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
dotenv.config()

const app = express();
app.use(express.json())

const User = require('./user')

mongoose.connect(process.env.mongourl).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log(err);
})

const generateToken = (userID) => {
    return jwt.sign({ id: userID }, process.env.secret, { expiresIn: '1h' })
}

const verfiyToken = (req, res, next) => {
    const authheader = req.headers.authorization;
    if (!authheader) {
        return res.json({ messsage: "token mmissing" })
    }

    const token = authheader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.secret);
        req.id = decoded.id;
        next()
    }
    catch (err) {
        res.json({ err })
    }
}

app.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body
        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name, email, password: hashPassword, phone
        })
        res.json({ message: "User registered successfully" })
    } catch (err) {
        res.json({ err })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ messsage: "User not found" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.json({ message: "invalid credentials" })
        }
        const token = generateToken(User.id)
        res.json({ message: "user login successfully", token: token })

    } catch (err) {
        res.json({ err })
    }
})

app.get('/user', verfiyToken, async (req, res) => {
    try {
        const user = await User.find()
        res.json({ messsage: "user fetcched", alluser: user })
    }
    catch (err) {
        res.json({ err })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})