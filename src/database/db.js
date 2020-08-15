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
            area INTEGER,
            position INTEGER,
            mode TEXT,
            description TEXT, 
            salary INTEGER
        );

        CREATE TABLE IF NOT EXISTS regions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            job_id INTEGER,
            region INTEGER,
            country TEXT,
            city TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
