const vacancies = [
    {
        company: "Itaú Unibanco", 
        logo: "https://www.itau.com.br/content/dam/itau/varejo/logo-app-Itau.png", 
        contact: "ruan_rf@hotmail.com", 
        description: "Absque sudore et labore nullum opus perfectum est", 
        "job-area": 1,
        "job-position": 5,
        "job-mode": 3,
        salary: "4900",
        region: [2],
        country: ["Beta"],
        city: ["お酒"]
    }
]

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}

function pageJobs(req, res) {
    return res.sendFile(__dirname + "/views/jobs.html")
}

function pageAddVacancy(req, res) {
    return res.sendFile(__dirname + "/views/add-vacancy.html")
}

const express = require('express')
const server = express()

server.use(express.static("public"))

.get('/', pageLanding)
.get("/jobs", pageJobs)
.get("/add-vacancy", pageAddVacancy)
.listen(5500)
