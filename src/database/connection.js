const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'localhost',
//     database: 'cargas',
//     user: 'postgres',
//     password: 'admin',
//     port: '5432'
// });



const pool = new Pool({
    host: 'ec2-50-17-90-177.compute-1.amazonaws.com',
    database: 'd96378kdg77u8v',
    user: 'vvcbejueyebjwm',
    password: 'c2f9891cb409352bad56be50221109e7a6d072f0858c76f4642200a9d865244b',
    port: '5432'
});
// Host
// ec2-34-230-149-169.compute-1.amazonaws.com
// Database
// dbooeohtrpjmv7
// User
// guuinsqjckzvbv
// Port
// 5432
// Password
// 22c5a25808efd43e6d23b4868eac3b054526680373a6019ec034e61d3c23ef19
// URI
// postgres://guuinsqjckzvbv:22c5a25808efd43e6d23b4868eac3b054526680373a6019ec034e61d3c23ef19@ec2-34-230-149-169.compute-1.amazonaws.com:5432/dbooeohtrpjmv7
// Heroku CLI
// heroku pg:psql postgresql-encircled-50092 --app pruebaproyectodg1


module.exports = pool;