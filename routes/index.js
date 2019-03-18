const ow = require('owapi');
var statRetrieval = require(__dirname + '/statRetrieval.js');

module.exports = {
    checkDatabase: function(userInput, con, res) {

        // create query
        var sql = "SELECT * FROM users WHERE username = ? AND season = 15";

        // query database for username
        con.query(sql, userInput["search-field"], async function (err, result, fields) {
            var isPrivate = false;
            var isNotExist = false;
            if (err) throw err;
            if (result[0] != undefined) {
                // user found in database - display stats page
                console.log("User found in database!");
                return res.redirect('/user/' + userInput["search-field"]);
            } else {
                // search for user in api
                var rawHTML = await ow.getRawHtmlFromBtag(userInput["search-field"], 'xbl').catch((err) => {
                    if (err ==='PLAYER_NOT_EXIST') {
                        // player does not exist
                        console.log("Player does not exist");
                        isNotExist = true;
                    } else if (err === 'ACCOUNT-PRIVATE') {
                        // account is private
                        console.log('Account is private!');
                        isPrivate = true;
                    }
                });
                if (!isNotExist && !isPrivate) {
                    await statRetrieval.insertUserData(userInput["search-field"], 'xbl', con);
                    await statRetrieval.insertHeroData(userInput["search-field"], 'xbl', con);
                    return res.redirect('/user/' + userInput["search-field"]);
                }
            }
            if (isPrivate) {
                // display private profile message
                
            } else if (isNotExist) {
                // display does not exist message
                return res.redirect('/user-not-found');
            } else {
                // display user page
            }
        });
        return;
        //res.send(compData);
        //res.render('index.ejs', {data: data});
    }
}