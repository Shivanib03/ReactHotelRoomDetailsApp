//to recreate the fake db - db.json for every server restart

const fs = require("fs");
const path = require("path");
const fakedb = require("./fakedata");
const rooms = fakedb;
const data = JSON.stringify( rooms);
const fpath = path.join(__dirname, "db.json");

fs.writeFile(fpath, data, function (err) {
  err ? console.log(err) : console.log("Db Sample created..");
});
/*
const fs = require("fs");
const path = require("path");
const rooms = {"rooms":[
    {
        id:1,
        type:"Presidential suite",
        charge:"1000"
    },
    {
        id:2,
        type:"Executive",
        charge:"2000"
    },
   
    {
        id:3,
        type:"Deluxe",
        charge:"3000"
    },
   {
        id:4,
        type:"Super deluxe",
        charge:"4000"
    },
    {
        id:5,
        type:"Junior suites",
        charge:"5000"
    }

]}
const data = JSON.stringify(rooms);
const fpath = "/Users/Shivani.Barahate/Documents/ReactApp/react-demo/src/server/db.json";
fs.writeFile(fpath,data,function(err){
    err?console.log(err) : console.log("looks fine");
});


*/