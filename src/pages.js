const Database = require('./database/db')
const { getJobArea, getJobPosition, getRegion, getJobMode } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageJobs(req, res) {
    const filters = req.query

    if (!filters.area || !filters.position || !filters.region) {
        console.log('campo vazio')
        return res.render("jobs.html", { filters, getJobArea, getJobPosition, getRegion })
    }

    console.log('Sem campo vazio')

    // must debug query
    const query = `
        SELECT job.*, company.*
        FROM company
        JOIN job ON (job.company_id = company.id)
        WHERE EXISTS (
            SELECT company.*
            FROM regions
            WHERE regions.job_id = job.id
            AND job.area = ${filters.area}
            AND job.position = ${filters.position}
            AND regions.region = ${filters.region}
        )
    `

}

function pageAddVacancy(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.area = getJobArea(data.area)
        data.position = getJobPosition(data.position)
        data.mode = getJobMode(data.mode)
        data.region = getRegion(data.region)
        vacancies.push(data)
        return res.redirect("/jobs")
    }

    return res.render("add-vacancy.html", { jobArea, jobPosition, jobMode, jobRegion })
}

module.exports = { pageLanding, pageJobs, pageAddVacancy }
