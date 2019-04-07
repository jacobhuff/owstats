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
var compareUser = require(__dirname + '/routes/compare.js');
var getComparison = require(__dirname + '/routes/comparison.js');
var pool = require(__dirname + '/middleware/database.js');

// set up server and database
const port = 5000;
const hostname = "localhost";

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

// ROUTES
// Home
app.get('/', async function(req, res) {
    res.render("index");
});
app.post('/', function(req, res) {
    indexJS.checkDatabase(req.body, res);
});

// Users
app.get('/user/:username/:platform', getAllStats.getAnaData(), 
    getAllStats.getAsheData(), getAllStats.getBastionData(), getAllStats.getBrigitteData(),
    getAllStats.getDVaData(), getAllStats.getDoomfistData(), getAllStats.getGenjiData(),
    getAllStats.getHanzoData(), getAllStats.getJunkratData(), getAllStats.getLucioData(),
    getAllStats.getMcCreeData(), getAllStats.getMeiData(), getAllStats.getMoiraData(),
    getAllStats.getOrisaData(), getAllStats.getPharahData(), getAllStats.getReaperData(),
    getAllStats.getReinhardtData(), getAllStats.getRoadhogData(), getAllStats.getSoldierData(),
    getAllStats.getSombraData(), getAllStats.getSymmetraData(), getAllStats.getTorbjornData(),
    getAllStats.getTracerData(), getAllStats.getWidowmakerData(), getAllStats.getWinstonData(),
    getAllStats.getBallData(), getAllStats.getZaryaData(), getAllStats.getZenyattaData(),
    getAllStats.getUserData(), getAllStats.sortHeroData(), getAllStats.renderStatsPage);

// Update Stats
app.post('/update-stats/:username/platform=:plat', function(req, res) {
    statRetrieval.insertData(req.params.username, req.params.plat);
    res.redirect('/user/' + req.params.username + '/' + req.params.plat);
});

// Compare Stats
app.post('/user/:username/compare/platform=:plat', function(req, res) {
    res.redirect('/user/' + req.params.username + '/compare/' + req.params.plat);
});
app.get('/user/:username/compare/:platform', function(req, res) {
    res.render('compare', {
        username: req.params.username,
        platform: req.params.platform
    });
});
app.post('/compare/form/:username/:platform', function(req, res) {
    compareUser.compareUser(req.params.username, req.params.platform, req.body, res);
});
app.post('/compare/:user1/:user2/hero', function(req, res) {
    res.redirect('/compare/' + req.params.user1 + '/' + req.params.user2 + '/hero=' + req.body.hero);
});
app.get('/compare/:user1/:user2/hero=:heroName', getComparison.getAnaData(), getComparison.getAsheData(), 
getComparison.getBastionData(), getComparison.getBrigitteData(),
getComparison.getDVaData(), getComparison.getDoomfistData(), getComparison.getGenjiData(),
getComparison.getHanzoData(), getComparison.getJunkratData(), getComparison.getLucioData(),
getComparison.getMcCreeData(), getComparison.getMeiData(), getComparison.getMoiraData(),
getComparison.getOrisaData(), getComparison.getPharahData(), getComparison.getReaperData(),
getComparison.getReinhardtData(), getComparison.getRoadhogData(), getComparison.getSoldierData(),
getComparison.getSombraData(), getComparison.getSymmetraData(), getComparison.getTorbjornData(),
getComparison.getTracerData(), getComparison.getWidowmakerData(), getComparison.getWinstonData(),
getComparison.getBallData(), getComparison.getZaryaData(), 
getComparison.getZenyattaData(), getComparison.renderHeroPage);  

app.get('/compare/:user1/:user2', getComparison.getUserData(), getComparison.renderComparePage);

// Profile Not Found
app.get('/user-not-found', function(req, res) {
    res.render('user-not-found');
});
app.post('/user-not-found', function(req, res) {
    res.redirect('/');
});
app.get('/user-not-found/:username/:platform', function(req, res) {
    res.render('userNotFoundCompare', {
        username: req.params.username,
        platform: req.params.platform
    });
});

// Private Account
app.get('/private-account', function(req, res) {
    res.render('private');
})
app.get('/private-account/:username/:platform', function(req, res) {
    res.render('privateCompare', {
        username: req.params.username,
        platform: req.params.platform
    });
});

// set port to listen for
app.listen(port, hostname, function() {
    console.log("Server running at: http://" + hostname + ":" + port);
});