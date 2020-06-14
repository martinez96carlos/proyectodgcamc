const { Pool } = require('pg');

// const pooldm = new Pool({
//     host: 'localhost',
//     database: 'dmtest1',
//     user: 'postgres',
//     password: 'admin',
//     port: '5432'
// });


const pooldm = new Pool({
    host: 'ec2-50-17-90-177.compute-1.amazonaws.com',
    database: 'daa02l43ev6glh',
    user: 'daybkckfvdehtj',
    password: '18003c5b1d7288d4bfa731b1d5136b8d80d5826869af86cbfb143c688de1d125',
    port: '5432'
});

// ec2-3-222-30-53.compute-1.amazonaws.com
// Database
// dee5jd6mdve6b7
// User
// scjubrikumbtfd
// Port
// 5432
// Password
// 15e2d0a88df9d1c7127154b0e5a01b499ea932ed833f3d3af47601464eb74220
// URI
// postgres://scjubrikumbtfd:15e2d0a88df9d1c7127154b0e5a01b499ea932ed833f3d3af47601464eb74220@ec2-3-222-30-53.compute-1.amazonaws.com:5432/dee5jd6mdve6b7
// Heroku CLI
// heroku pg:psql postgresql-slippery-83222 --app pruebaproyectodg1

module.exports = pooldm;
