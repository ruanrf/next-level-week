const Database = require('./db');
const addVacancy = require('./addVacancy')

Database.then((db) => {
    company = {
        company: "Itaú Unibanco",
        logo: "https://www.itau.com.br/content/dam/itau/varejo/logo-app-Itau.png",
        contact: "ruan_rf@hotmail.com",
    }

    job = {
        // companyId: "", // to be retrieved through DB
        area: 1,
        position: 5,
        mode: 3,
        description: "Absque sudore et labore nullum opus perfectum est",
        salary: "4900"
    }

    region = [
        {
            // jobId: "", // to be retrieved through DB
            region: 2,
            country: "Brazil",
            city: "São Paulo"
        }, 
        {
            // jobId: "", // to be retrieved through DB
            region: 3,
            country: "Brazil",
            city: "Mogi das Cruzes"
        }
    ]

    // addVacancy(db, {company, job, region})

});
