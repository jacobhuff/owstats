const ow = require('owapi');
var statRetrieval = require(__dirname + '/statRetrieval.js');
var pool = require('../middleware/database.js');

module.exports = {
    checkDatabase: function(userInput, res) {

        if (userInput.platform === "pc") {
            userInput["search-field"] = userInput["search-field"].replace('#', '-');
        }

        // create query
        var sql = "SELECT * FROM users WHERE username = ? AND platform = ? AND season = 15";

        // query database for username
        pool.query(sql, [userInput["search-field"], userInput.platform], async function (err, result, fields) {
            if (err) throw err;
            var isPrivate = false;
            var isNotExist = false;
            if (result[0] !== undefined) {
                // user found in database - display stats page
                
                return res.redirect('/user/' + userInput["search-field"] + '/' + userInput.platform);
            } else {
                // search for user in api
                var rawHTML = await ow.getRawHtmlFromBtag(userInput["search-field"], userInput.platform).catch((err) => {
                    if (err ==='PLAYER_NOT_EXIST') {
                        // player does not exist
                        isNotExist = true;
                    } else if (err === 'ACCOUNT_PRIVATE') {
                        // account is private
                        isPrivate = true;
                    }
                });
                if (!isNotExist && !isPrivate) {
                    await statRetrieval.insertData(userInput["search-field"], userInput.platform);
                    return res.redirect('/user/' + userInput["search-field"] + '/' + userInput.platform);
                }
            }
            if (isPrivate) {
                // display private profile message
                return res.redirect('/private-account');
            } else if (isNotExist) {
                // display does not exist message
                return res.redirect('/user-not-found');
            }
        });
    }
}