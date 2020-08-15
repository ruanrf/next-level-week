const Database = require('./db');
const addVacancy = require('./addVacancy');
const { query } = require('express');

Database.then(async (db) => {
    company = {
        company: "Itaú Unibanco",
        logo: "https://www.itau.com.br/content/dam/itau/varejo/logo-app-Itau.png",
        contact: "ruan_rf@hotmail.com",
    }

    job = {
        area: 1,
        position: 5,
        mode: 3,
        description: "Absque sudore et labore nullum opus perfectum est",
        salary: "4900"
    }

    regions = [
        {
            region: 2,
            country: "Brazil",
            city: "São Paulo"
        },
        {
            region: 3,
            country: "Brazil",
            city: "Mogi das Cruzes"
        }
    ]

    await addVacancy(db, { company, job, regions })

    // const selectCompany = await db.all("SELECT * FROM company")
    // console.log(selectCompany)

    // const selectJobWithCompany = await db.all(`
    //     SELECT company.*, job.*
    //     FROM company
    //     JOIN job ON (job.company_id = company.id)
    //     WHERE job.company_id = 1;
    // `)
    // console.log(selectJobWithCompany)

    const filterRegion = await db.all(`
        SELECT regions.*, job.*, company.*
        FROM regions, job, company 
        WHERE regions.job_id = job.id
        AND job.company_id = company.id
        AND regions.region = 3
    `)

    console.log(filterRegion)
    
    const betaQuery = await db.all(`
        SELECT job.*
        FROM job
        JOIN job ON (job.company_id = company.id)
        WHERE EXISTS (
            SELECT company.*
            FROM regions, company, job
            WHERE regions.job_id = job.id
            AND job.area = job.area
            AND job.position = job.position
            AND regions.region = regions.region
        )
    `)

})
