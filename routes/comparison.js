var allHeroes = ["Ana", "Ashe", "Bastion", "Brigitte", "DVa", "Doomfist", "Genji", 
"Hanzo", "Junkrat", "Lúcio", "McCree", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", 
"Reinhardt", "Roadhog", "Soldier: 76", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker", 
"Winston", "Wrecking Ball", "Zarya", "Zenyatta"];
var currSeason = 15;
var statRetrieval = require(__dirname + '/statRetrieval.js');
var pool = require('../middleware/database.js');

module.exports = {

    getAnaData: function() {
        return async function(req, res, next) {

            // update user data
            // await statRetrieval.insertUserData(req.params.user1, [platform]);
            // await statRetrieval.insertHeroData(req.params.user1, [platform]);
            // await statRetrieval.insertUserData(req.params.user2, [platform]);
            // await statRetrieval.insertHeroData(req.params.user2, [platform]);

            // create username vars
            req.user1Name = req.params.user1;
            req.user2Name = req.params.user2;

            // allocate arrays for hero data
            req.user1HeroData = [];
            req.user2HeroData = [];

            var sql = 'select * from ana where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getAsheData: function() {
        return function(req, res, next) {
            var sql = 'select * from ashe where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getBastionData: function() {
        return function(req, res, next) {
            var sql = 'select * from bastion where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getBrigitteData: function() {
        return function(req, res, next) {
            var sql = 'select * from brigitte where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getDVaData: function() {
        return function(req, res, next) {
            var sql = 'select * from dva where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getDoomfistData: function() {
        return function(req, res, next) {
            var sql = 'select * from doomfist where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getGenjiData: function() {
        return function(req, res, next) {
            var sql = 'select * from genji where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getHanzoData: function() {
        return function(req, res, next) {
            var sql = 'select * from hanzo where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getJunkratData: function() {
        return function(req, res, next) {
            var sql = 'select * from junkrat where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getLucioData: function() {
        return function(req, res, next) {
            var sql = 'select * from lucio where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getMcCreeData: function() {
        return function(req, res, next) {
            var sql = 'select * from mccree where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getMeiData: function() {
        return function(req, res, next) {
            var sql = 'select * from mei where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getMercyData: function() {
        return function(req, res, next) {
            var sql = 'select * from mercy where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getMoiraData: function() {
        return function(req, res, next) {
            var sql = 'select * from moira where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getOrisaData: function() {
        return function(req, res, next) {
            var sql = 'select * from orisa where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getPharahData: function() {
        return function(req, res, next) {
            var sql = 'select * from pharah where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getReaperData: function() {
        return function(req, res, next) {
            var sql = 'select * from reaper where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getReinhardtData: function() {
        return function(req, res, next) {
            var sql = 'select * from reinhardt where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getRoadhogData: function() {
        return function(req, res, next) {
            var sql = 'select * from roadhog where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getSoldierData: function() {
        return function(req, res, next) {
            var sql = 'select * from soldier where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getSombraData: function() {
        return function(req, res, next) {
            var sql = 'select * from sombra where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getSymmetraData: function() {
        return function(req, res, next) {
            var sql = 'select * from symmetra where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getTorbjornData: function() {
        return function(req, res, next) {
            var sql = 'select * from torbjorn where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getTracerData: function() {
        return function(req, res, next) {
            var sql = 'select * from tracer where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getWidowmakerData: function() {
        return function(req, res, next) {
            var sql = 'select * from widowmaker where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getWinstonData: function() {
        return function(req, res, next) {
            var sql = 'select * from winston where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getBallData: function() {
        return function(req, res, next) {
            var sql = 'select * from wreckingball where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getZaryaData: function() {
        return function(req, res, next) {
            var sql = 'select * from zarya where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getZenyattaData: function() {
        return function(req, res, next) {
            var sql = 'select * from zenyatta where username in (?, ?) and season in (?, ?)';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined && result[1] !== undefined) {
                    // some data exists
                    var tempUser1Data;
                    var tempUser2Data;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].username === req.params.user1) {
                            // hero data is for user 1
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user1) {
                                    // hero data for user 1 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 1 exists - push it
                                        tempUser1Data = result[i + 1];
                                    }
                                } else {
                                    // check if current season and push current data for user 1
                                    if (result[i].season === currSeason) {
                                        tempUser1Data = result[i];
                                    }
                                }
                            } else {
                                // check if current season and push current data for user 1
                                if (result[i].season === currSeason) {
                                    tempUser1Data = result[i];
                                }
                            }
                        } else {
                            // hero data is for user 2
                            if (result[i + 1] !== undefined) {
                                if (result[i + 1].username === req.params.user2) {
                                    // hero data for user 2 exists for current and previous seasons - check for duplicate data
                                    if (result[i].HeroDamageDone === result[i + 1].HeroDamageDone
                                        && result[i].Elims === result[i + 1].Elims
                                        && result[i].Deaths === result[i + 1].Deaths) {
                                        // data for one user is from previous season - do not display
                                        break;
                                    } else {
                                        // hero data for user 2 exists - push it
                                        tempUser2Data = result[i + 1];
                                    }
                                } else {
                                    // push current data for user 2
                                    tempUser2Data = result[i];
                                }
                            } else {
                                // push current data for user 2
                                tempUser2Data = result[i];
                            }
                        }
                    }
                    if (tempUser1Data !== undefined && tempUser2Data !== undefined) {
                        // hero data can be compared - check games played
                        if (tempUser1Data.GamesPlayed >= 10 && tempUser2Data.GamesPlayed >= 10) {
                            req.user1HeroData.push(tempUser1Data);
                            req.user2HeroData.push(tempUser2Data);
                        }
                    }
                }
                next();
            });
        }
    },
    getUserData: function() {
        return function(req, res, next) {
            var sql = 'select * from users where username in (?, ?) and season = ?';
            pool.query(sql, [req.params.user1, req.params.user2, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[0].username === req.params.user1) {
                    req.user1Data = result[0];
                    req.user2Data = result[1];
                } else {
                    req.user1Data = result[1];
                    req.user2Data = result[0];
                }
                next();
            });
        }
    },

    renderComparePage: function(req, res) {
        // res.send({
        //     user1Data: req.user1Data,
        //     user2Data: req.user2Data,
        //     user1HeroData: req.user1HeroData,
        //     user2HeroData: req.user2HeroData
        // });
        res.render('compareUsers', {
            user1Data: req.user1Data,
            user2Data: req.user2Data,
            user1HeroData: req.user1HeroData,
            user2HeroData: req.user2HeroData
        });
    },

    renderHeroPage: function(req, res) {
        res.render('compareHeroes', {
            heroName: req.params.heroName,
            user1HeroData: req.user1HeroData,
            user2HeroData: req.user2HeroData,
            user1Name: req.user1Name,
            user2Name: req.user2Name
        });
        // res.send({
        //     heroName: req.params.heroName,
        //     user1HeroData: req.user1HeroData,
        //     user2HeroData: req.user2HeroData
        // });
    }
}