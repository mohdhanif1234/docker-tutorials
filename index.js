import express from 'express'

const app = express()

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`<h2> PORT ${port} My name is hanif!!!</h2>`)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})