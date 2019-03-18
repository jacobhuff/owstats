// requirements
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const ow = require('owapi');

// functions
var indexJS = require(__dirname + '/routes/index.js');
var statRetrieval = require(__dirname + '/routes/statRetrieval.js');
var getAllStats = require(__dirname + '/routes/getStats.js');

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
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// CONNECT TO DATABASE
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
// collect data from database and render it on home page
con.connect(function(err) {
    if (err) throw err;
    console.log("connected to DB");
}); 

// ROUTES
// Home
app.get('/', async function(req, res) {
    res.render("index");
});
app.post('/', function(req, res) {
    indexJS.checkDatabase(req.body, con, res);
});

// Users
app.get('/user/:username', getAllStats.getUserData(con), getAllStats.getAnaData(con), 
    getAllStats.getAsheData(con), getAllStats.getBastionData(con), getAllStats.getBrigitteData(con),
    getAllStats.getDVaData(con), getAllStats.getDoomfistData(con), getAllStats.getGenjiData(con),
    getAllStats.getHanzoData(con), getAllStats.getJunkratData(con), getAllStats.getLucioData(con),
    getAllStats.getMcCreeData(con), getAllStats.getMeiData(con), getAllStats.getMoiraData(con),
    getAllStats.getOrisaData(con), getAllStats.getPharahData(con), getAllStats.getReaperData(con),
    getAllStats.getReinhardtData(con), getAllStats.getRoadhogData(con), getAllStats.getSoldierData(con),
    getAllStats.getSombraData(con), getAllStats.getSymmetraData(con), getAllStats.getTorbjornData(con),
    getAllStats.getTracerData(con), getAllStats.getWidowmakerData(con), getAllStats.getWinstonData(con),
    getAllStats.getBallData(con), getAllStats.getZaryaData(con), getAllStats.getZenyattaData(con),
    getAllStats.getPercentiles(), getAllStats.renderStatsPage);

// Update Stats
app.post('/update-stats/:username', async function(req, res) {
    // update stats and redirect
    await statRetrieval.insertUserData(req.params.username, 'xbl', con);
    await statRetrieval.insertHeroData(req.params.username, 'xbl', con);
    res.redirect('../user/' + req.params.username);
});

// Profile Not Found
app.get('/user-not-found', function(req, res) {
    res.render('user-not-found');
});
app.post('/user-not-found', function(req, res) {
    res.redirect('/');
});

// set port to listen for
app.listen(port, hostname, () => {
    console.log('Server running on port: ' + port);
});