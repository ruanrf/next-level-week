const Database = require('sqlite-async')

// logic: every company has jobs; every job has a location;
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS company (
            id integer PRIMARY KEY AUTOINCREMENT,
            company TEXT, 
            logo TEXT,
            contact TEXT
        );

        CREATE TABLE IF NOT EXISTS job (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            company_id INTEGER,
            area TEXT,
            position TEXT,
            mode TEXT,
            description TEXT, 
            salary INTEGER
        );

        CREATE TABLE IF NOT EXISTS region (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            job_id INTEGER,
            region TEXT,
            country TEXT,
            city TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
