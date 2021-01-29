//create a configured instance of knex
const knex=require('knex');
// const knexfile=require('../knexfile');
const config=require('../knexfile');

const db= knex(config.development);

// const db=knex(knexfile.development);

//initiate a connection to db so we can import it to other files
// module.exports=knex(knexfile.development);
module.exports=db;
//then create migration file by npx knex migrate:make fruits (for having migration file for fruits db)