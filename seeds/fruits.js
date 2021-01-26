exports.seed = async function(knex) {
await knex("fruits").truncate() //resets and clears out all rows in the table
 await knex("fruits").insert([
   {name:"dragon fruit",avgWeightOz:16.7,delicious:true,color:'red'},
   {name:"Orange",avgWeightOz:12.7,delicious:true,color:'prange'},
   {name:"Gooseberry",avgWeightOz:1.7,delicious:true,color:'green'},
   {name:"Guova",avgWeightOz:10.7,delicious:true,color:'yellow'},
   {name:"Jack fruit",avgWeightOz:36.7,delicious:true,color:'yellowbrown'}
 ])

  
};
