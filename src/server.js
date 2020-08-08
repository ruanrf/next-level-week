const express = require('express')
const server = express()

server.use(express.static("public"))

.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/jobs", (req, res) => {
    return res.sendFile(__dirname + "/views/jobs.html")
})
.get("/add-vacancy", (req, res) => {
    return res.sendFile(__dirname + "/views/add-vacancy.html")
})
.listen(5500)
