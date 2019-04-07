var allHeroes = ["Ana", "Ashe", "Bastion", "Brigitte", "DVa", "Doomfist", "Genji", 
"Hanzo", "Junkrat", "Lúcio", "McCree", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", 
"Reinhardt", "Roadhog", "Soldier: 76", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker", 
"Winston", "Wrecking Ball", "Zarya", "Zenyatta"];
var currSeason = 15;
var pool = require('../middleware/database.js');

module.exports = {

    getAnaData: function() {
        return function(req, res, next) {

            req.heroData = [];

            var sql = 'select * from ana where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getAsheData: function() {
        return function(req, res, next) {
            var sql = 'select * from ashe where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getBastionData: function() {
        return function(req, res, next) {
            var sql = 'select * from bastion where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getBrigitteData: function() {
        return function(req, res, next) {
            var sql = 'select * from brigitte where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getDVaData: function() {
        return function(req, res, next) {
            var sql = 'select * from dva where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getDoomfistData: function() {
        return function(req, res, next) {
            var sql = 'select * from doomfist where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getGenjiData: function() {
        return function(req, res, next) {
            var sql = 'select * from genji where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getHanzoData: function() {
        return function(req, res, next) {
            var sql = 'select * from hanzo where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getJunkratData: function() {
        return function(req, res, next) {
            var sql = 'select * from junkrat where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getLucioData: function() {
        return function(req, res, next) {
            var sql = 'select * from lucio where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getMcCreeData: function() {
        return function(req, res, next) {
            var sql = 'select * from mccree where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getMeiData: function() {
        return function(req, res, next) {
            var sql = 'select * from mei where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getMercyData: function() {
        return function(req, res, next) {
            var sql = 'select * from mercy where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getMoiraData: function() {
        return function(req, res, next) {
            var sql = 'select * from moira where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getOrisaData: function() {
        return function(req, res, next) {
            var sql = 'select * from orisa where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getPharahData: function() {
        return function(req, res, next) {
            var sql = 'select * from pharah where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getReaperData: function() {
        return function(req, res, next) {
            var sql = 'select * from reaper where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getReinhardtData: function() {
        return function(req, res, next) {
            var sql = 'select * from reinhardt where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getRoadhogData: function() {
        return function(req, res, next) {
            var sql = 'select * from roadhog where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getSoldierData: function() {
        return function(req, res, next) {
            var sql = 'select * from soldier where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getSombraData: function() {
        return function(req, res, next) {
            var sql = 'select * from sombra where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getSymmetraData: function() {
        return function(req, res, next) {
            var sql = 'select * from symmetra where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getTorbjornData: function() {
        return function(req, res, next) {
            var sql = 'select * from torbjorn where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getTracerData: function() {
        return function(req, res, next) {
            var sql = 'select * from tracer where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getWidowmakerData: function() {
        return function(req, res, next) {
            var sql = 'select * from widowmaker where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getWinstonData: function() {
        return function(req, res, next) {
            var sql = 'select * from winston where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getBallData: function() {
        return function(req, res, next) {
            var sql = 'select * from wreckingball where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getZaryaData: function() {
        return function(req, res, next) {
            var sql = 'select * from zarya where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getZenyattaData: function() {
        return function(req, res, next) {
            var sql = 'select * from zenyatta where username = ? and season in (?, ?)';
            pool.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (result[0] !== undefined) {
                    if (result[1] !== undefined) {
                        // season 14 and 15 stats exists, compare them
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                            && result[0].Elims === result[1].Elims
                            && result[0].Deaths === result[1].Deaths) {
                            // current stats are from last season - DO NOT DISPLAY
                        } else {
                            if (result[1].GamesPlayed >= 10) {
                                req.heroData.push(result[1]);
                            }
                        }
                    } else {
                        if (result[0].season === 15 && result[0].GamesPlayed >= 10) {
                            req.heroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },

    getUserData: function() {
        return function (req, res, next) {
            var sql = 'select * from users where username = ? and season = ?';
            pool.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                req.userData = result[0];
                next();
            });
        }
    },

    sortHeroData: function() {
        return function(req, res, next) {
            if (req.heroData.length !== 0 || req.heroData.length !== 1) {
                var isSorted = false;
                while (!isSorted) {
                    isSorted = true;
                    for (var i = 0; i < req.heroData.length - 1; i++) {
                        var currGames = req.heroData[i].GamesPlayed;
                        if (currGames < req.heroData[i + 1].GamesPlayed) {
                            var tempData = req.heroData[i];
                            req.heroData[i] = req.heroData[i + 1];
                            req.heroData[i + 1] = tempData;
                            isSorted = false;
                        }
                    }
                }
            }
            next();
        }
    },
    renderStatsPage: function(req, res) {
        // res.send({
        //     userData: req.userData,
        //     heroData: req.heroData
        // });
        res.render('user', {
            platform: req.params.platform,
            userData: req.userData,
            heroData: req.heroData
        });
    }
}