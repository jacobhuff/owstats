const ow = require('owapi');
var statRetrieval = require(__dirname + '/statRetrieval.js');
var pool = require('../middleware/database.js');

module.exports = {
    compareUser: function(origUser, platform, userInput, res) {

        if (userInput.platform === "pc") {
            userInput["go-field"] = userInput["go-field"].replace('#', '-');
        }
        
        // create query
        var sql = "SELECT * FROM users WHERE username = ? AND platform = ? AND season = 15";

        // query database for username
        pool.query(sql, [userInput["go-field"], userInput.platform], async function (err, result, fields) {
            var isPrivate = false;
            var isNotExist = false;
            if (err) throw err;
            if (result[0] !== undefined) {
                // user found in database - display stats page

                return res.redirect('/compare/' + origUser + '/' + userInput["go-field"]);
            } else {
                // search for user in api
                var rawHTML = await ow.getRawHtmlFromBtag(userInput["go-field"], userInput.platform).catch((err) => {
                    if (err ==='PLAYER_NOT_EXIST') {
                        // player does not exist
                        isNotExist = true;
                    } else if (err === 'ACCOUNT_PRIVATE') {
                        // account is private
                        isPrivate = true;
                    }
                });
                if (!isNotExist && !isPrivate) {
                    await statRetrieval.insertData(userInput["go-field"], userInput.platform);
                    return res.redirect('/compare/' + origUser + '/' + userInput["go-field"]);
                }
            }
            if (isPrivate) {
                // display private profile message
                return res.redirect('/private-account/' + origUser + '/' + platform);
            } else if (isNotExist) {
                // display does not exist message
                return res.redirect('/user-not-found/' + origUser + '/' + platform);
            }
        });
    }
}