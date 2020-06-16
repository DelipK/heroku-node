const express = require('express')
const port = process.env.PORT||5000
const userRouter = require('./routes/controller')
require('./config/db')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})