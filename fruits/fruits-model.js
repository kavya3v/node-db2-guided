const db= require('../data/config');

module.exports={
    get,
    getById,
    create
}

async function get(){
return await db('fruits');
}

async function getById(){


}

async function create(){


}