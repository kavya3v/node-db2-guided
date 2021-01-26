//instance of knex
const knex=require('knex');
const knexfile=require('../knexfile');

//initiate a connection to db so we can import it to other files
module.exports=knex(knexfile);
//then create migration file by npx knex migrate:make fruits (for having migration file for fruits db)