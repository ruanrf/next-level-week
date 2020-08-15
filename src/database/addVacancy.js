module.exports = async function (db, { company, job, regions }) {

    const insertedCompany = await db.run(`
        INSERT INTO company (
            company,
            logo,
            contact
        ) VALUES (
            "${company.company}",
            "${company.logo}",
            "${company.contact}"
        );
    `)
    const company_id = insertedCompany.lastID

    const insertedJob = await db.run(`
        INSERT INTO job (
            company_id,
            area,
            position,
            mode,
            description,
            salary
        ) VALUES (
            "${company_id}",
            "${job.area}",
            "${job.position}",
            "${job.mode}",
            "${job.description}",
            "${job.salary}"
        );
    `)
    const job_id = insertedJob.lastID

    const insertedRegions = regions.map((regionValue) => {
        return db.run(`
            INSERT INTO regions (
                job_id,
                region,
                country,
                city
            ) VALUES (
                "${job_id}",
                "${regionValue.region}",
                "${regionValue.country}",
                "${regionValue.city}"
            )
        `)
    })
    await Promise.all(insertedRegions)

}
