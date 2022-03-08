
/*
npm install pg
*/ 

const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "3715",
    database: "practical_sql"



})

client.connect();


var _query='select * from public.nyc_census_sociodata;';





client.query(_query,(err,res)=>{

    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
    client.end;


})