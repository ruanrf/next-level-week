// server
const express = require('express')
const server = express()

// pages
const { pageLanding, pageJobs, pageAddVacancy } = require('./pages')

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
