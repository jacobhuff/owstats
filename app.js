// requirements
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const ow = require('owapi');

// set up server
const port = 3000;
const hostname = '127.0.0.1';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configuration
app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// global vars
var usernames = ["PainTrane13", "ChocolateRain79", "MilkSteakMayhem", "RicketyCricketV",
    "Rainccoat", "ForGodsOnly", "OGmrAZIMUTH", "UnTiltedCraft", "HaKobo-11997"];
var platforms = ["xbl", "xbl", "xbl", "xbl", "xbl", "xbl", "xbl", "xbl", "pc"];
var allHeroes = ["Ana", "Ashe", "Bastion", "Brigitte", "D.Va", "Doomfist", "Genji", 
    "Hanzo", "Junkrat", "Lúcio", "McCree", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", 
    "Reinhardt", "Roadhog", "Soldier", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker", 
    "Winston", "Wrecking Ball", "Zarya", "Zenyatta"];
var heroestoInsert = [];

// CURRENT SEASON
var currSeason = 15;

// connect to database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Snake00*",
    database: "overwatchDB"
});

// catch errors
con.on('error', function(err) {
    console.log("[mysql error]",err);
});

// routes
app.get('/', async function(req, res) {

    // collect data from database and render it on home page
    con.connect(function(err) {
        if (err) throw err;
        console.log("connected to DB");

    }); 
    
});

// set port to listen for
app.listen(port, hostname, () => {
    console.log('Server running on port: ' + port);
});