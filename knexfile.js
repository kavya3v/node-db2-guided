// Update with your config settings.
//tell knex to use sqlite3 - package that connects to the db
//filename
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullAsDefault:true,
    migrations:{
      directory: './migrations'
    },
    seeds:{
      directory: './seeds'
    }
  }
};
