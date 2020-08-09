// data
const vacancies = [
    {
        company: "Itaú Unibanco", 
        logo: "https://www.itau.com.br/content/dam/itau/varejo/logo-app-Itau.png", 
        contact: "ruan_rf@hotmail.com", 
        description: "Absque sudore et labore nullum opus perfectum est", 
        area: 1,
        position: 5,
        mode: 3,
        salary: "4900",
        // benefits: "xpto",
        region: [2],
        country: ["Brazil"],
        city: ["São Paulo"]
    }
]

const jobArea = [
    "Front-end",
    "Back-end",
    "Full-stack",
    "QA and Testing",
    "Mobile (Android)",
    "Mobile (iOS)",
    "Mobile (Hybrid)",
    "Design",
    "UX",
    "Product Owner",
    "Business",
    "Others"
]

const jobPosition = [
    "Intern",
    "Junior",
    "Middle",
    "Senior",
    "Trainee",
    "Lead",
    "CTO",
    "Director",
    "Others"
]

const jobRegion = [
    "Europe",
    "North America",
    "South America",
    "Oceania",
    "Asia",
    "Africa",
    "N/A"
]

const jobMode = [
    "Office-only",
    "Remote-only",
    "Hybrid"
]

// functions
function getJobArea(areaNumber) {
    return jobArea[areaNumber]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageJobs(req, res) {
    const filters = req.query
    return res.render("jobs.html", { vacancies, filters, jobArea, jobPosition, jobRegion, jobMode })    
}

function pageAddVacancy(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) { 
        data.area = getJobArea(data.area)
        vacancies.push(data)
        return res.redirect("/jobs")
    }
    
    return res.render("add-vacancy.html", { jobArea, jobPosition, jobMode, jobRegion })
}

// server
const express = require('express')
const server = express()

// nunjucks configuration (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// server start and execution
server
// static files
.use(express.static("public")) 
// routes
.get('/', pageLanding)
.get("/jobs", pageJobs)
.get("/add-vacancy", pageAddVacancy)
// start server
.listen(5500)
