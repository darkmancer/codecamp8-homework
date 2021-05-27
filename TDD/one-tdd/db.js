var data = [
    {
        username : "test",
        password: "test"
    },
    {
        username : "test2",
        password : "test2"
    },

    {
        username : "test3",
        password : 1234
    },

    {
        username : "test4",
        password : 1111
    }

];

function db(){
    return data;
}

module.exports = db;