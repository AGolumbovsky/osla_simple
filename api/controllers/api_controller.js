const { Pool } = require('pg');
const pool = require('../config/db_connect');
const cors = require('cors');

module.exports = (app) => {

    app.use(cors());
    app.options('*', cors());

    app.get('/api/word', (req, res) => {

        let queryText = `SELECT * FROM dict_entries` ;
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }
            
            console.log("SELECT query executed");
            console.log(`apiController sent ${data.rows[0].reading}`);
            res.send(data);
        })
    });

    app.post('/api/dummyPopulate', (req, res) => {

        console.log("res is:", res.json());
        let dummyStr = "testest testestest";
        let description = "testest description";

        let queryText = `INSERT INTO dict_entries (word, description)
                        VALUES (${ dummyStr }, 'from view to db dbl qs')`;
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }

            console.log("INSERT query executed", data);

        });
        
                
    });

}