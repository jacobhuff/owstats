var allHeroes = ["Ana", "Ashe", "Bastion", "Brigitte", "DVa", "Doomfist", "Genji", 
"Hanzo", "Junkrat", "Lúcio", "McCree", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", 
"Reinhardt", "Roadhog", "Soldier: 76", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker", 
"Winston", "Wrecking Ball", "Zarya", "Zenyatta"];
var currSeason = 15;

module.exports = {

    getUserData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from users where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                req.userData = result[0];
                next();
            });
        }
    },

    getAnaData: function(con) {
        return function(req, res, next) {

            req.allHeroData = [];

            var sql = 'select * from ana where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason, req.params.username, currSeason - 1], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },

    getAsheData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from ashe where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getBastionData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from bastion where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getBrigitteData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from brigitte where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getDVaData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from dva where username = ? and season IN (?, ?)';
            con.query(sql, [req.params.username, currSeason, currSeason - 1], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getDoomfistData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from doomfist where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getGenjiData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from genji where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getHanzoData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from hanzo where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getJunkratData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from junkrat where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getLucioData: function(con) {
        return function(req, res, next) {
            var sql = 'select distinct * from lucio where season = ?';
            con.query(sql, [currSeason], function (err, result, fields) {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].GamesPlayed >= 10) {
                        req.allHeroData.push(result[i]);
                    }
                }
                next();
            });
        }
    },
    getMcCreeData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from mccree where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getMeiData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from mei where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getMercyData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from mercy where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getMoiraData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from moira where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getOrisaData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from orisa where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getPharahData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from pharah where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getReaperData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from reaper where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getReinhardtData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from reinhardt where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getRoadhogData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from roadhog where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getSoldierData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from soldier where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getSombraData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from sombra where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getSymmetraData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from symmetra where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getTorbjornData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from torbjorn where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getTracerData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from tracer where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getWidowmakerData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from widowmaker where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getWinstonData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from winston where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getBallData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from wreckingball where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getZaryaData: function(con) {
        return function(req, res, next) {
            var sql = 'select * from zarya where username = ? and season = ?';
            con.query(sql, [req.params.username, currSeason], function (err, result, fields) {
                if (err) throw err;
                if (result[1] !== undefined) {
                    if (result[0] !== undefined) {
                        if (result[0].HeroDamageDone === result[1].HeroDamageDone
                        && result[0].Eliminations === result[1].Eliminations
                        && result[0].Deaths === result[1].Deaths) {
                                // values are from last season, don't send
                        } else {
                            // stats are updated - send them
                            if (result[1].GamesPlayed > 9) {
                                req.allHeroData.push(result[1]);
                            }
                        }
                    } else {
                        // no stats from last season, send this season's
                        if (result[1].GamesPlayed > 9) {
                            req.allHeroData.push(result[1]);
                        }
                    }
                } else {
                    // send this season's stats
                    if (result[0] !== undefined && result[0].season === currSeason) {
                        if (result[0].GamesPlayed > 9) {
                            req.allHeroData.push(result[0]);
                        }
                    }
                }
                next();
            });
        }
    },
    getZenyattaData: function(con) {
        return function(req, res, next) {
            var sql = 'select distinct * from zenyatta where season = ?';
            con.query(sql, [currSeason], function (err, result, fields) {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].GamesPlayed >= 10) {
                        req.allHeroData.push(result[i]);
                    }
                }
                next();
            });
        }
    },
    
    getPercentiles: function() {
        return function(req, res, next) {
            req.heroData = [];
            for (var i = 0; i < req.allHeroData.length; i++) {
                if (req.allHeroData[i].username === req.params.username) {
                    req.heroData.push(req.allHeroData[i]);
                }
            }
            next();
        }
    },

    renderStatsPage: function(req, res) {
        // res.send({
        //     userData: req.userData,
        //     heroData: req.heroData,
        //     allHeroData: req.allHeroData
        // });
        res.render('user', {
            userData: req.userData,
            heroData: req.heroData,
            allHeroData: req.allHeroData
        });
    }
}