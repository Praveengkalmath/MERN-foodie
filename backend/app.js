const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000

//require database models
const User = require('./models/users')
const Post = require('./models/posts')


const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

//middlewears
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())  //cross origin  resourse sharing


const dbURL = "mongodb://localhost:27017/foodie"
mongoose.connect(dbURL).then(() => {
    console.log("connected to database")
})

app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, userData) => {
        if (userData) {
            if (req.body.password == userData.password) {
                res.send({ message: 'login successfully' })
            } else {
                res.send({ message: 'login failed' })
            }
        } else {
            res.send({ message: 'no account seems to be maching with your email' })
        }
    })
})

app.post('/signup', async (req, res) => {
    User.findOne({ email: req.body.email }, (err, userData) => {

        if (userData) {
            res.send({ message: "Seems like you already have an accountwith this email Address" })
        } else {
            const data = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobileNumber: req.body.mobileNumber
            })

            data.save(() => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "user rigistred successfully" })
                }
            })
        }

    })

})
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        console.log(err);
    }
})

app.get('/posts/:id', async (req, res) => {
    const { id } = req.params
    try {
        const singlePost = await Post.findById(id)
        res.send(singlePost)
    } catch (error) {
        res.send(error)

    }
})

app.post('/add-posts', async (req, res) => {

    let postData = new Post({
        author: req.body.author,
        title: req.body.title,
        summary: req.body.summary,
        image: req.body.image,
        location: req.body.location
    })
    try {
        await postData.save()
        res.send({ message: 'Post added successfully' })
    } catch (error) {
        res.send({ message: 'Failed to add post' })
    }

})

app.listen(PORT, () => {
    console.log(`listening to server ${PORT}`)
})