// Requirements
var ow = require('owapi');
var converter = require(__dirname + '/converter.js');
var pool = require('../middleware/database.js');

// global vars
var allHeroes = ["Ana", "Ashe", "Bastion", "Brigitte", "DVa", "Doomfist", "Genji", 
"Hanzo", "Junkrat", "Lúcio", "McCree", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", 
"Reinhardt", "Roadhog", "Soldier: 76", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker", 
"Winston", "Wrecking Ball", "Zarya", "Zenyatta"];
var heroestoInsert = [];
var currSeason = 15;
var currHTML;
var compData;
var generalData;
var accountData;

module.exports = {

    insertData: async function(username, platform) {
        await insertUserData(username, platform);
        insertHeroData(username, platform);
    }
}

async function insertUserData(username, platform) {

    // GET DATA FROM API
    await callAPI(username, platform);

    var allData = [];
    var currData = getUserData(username, platform);
    allData.push(currData);

    var sql = "INSERT INTO users(username, season, platform, user_rank, level, elims_in_game, " +
    "healing_in_game, damage_in_game, healing, hero_damage, elims, deaths, time_on_fire, " +
    "games_played, games_won, games_lost, games_tied, time_played, cards, medals, " +
    "gold, silver, bronze, profile_image) VALUES ? ON DUPLICATE KEY UPDATE platform=VALUES(platform), " +
    "user_rank=VALUES(user_rank), level=VALUES(level), elims_in_game=VALUES(elims_in_game), " +
    "healing_in_game=VALUES(healing_in_game), damage_in_game=VALUES(damage_in_game), " +
    "healing=VALUES(healing), hero_damage=VALUES(hero_damage), elims=VALUES(elims), " +
    "deaths=VALUES(deaths), time_on_fire=VALUES(time_on_fire), games_played=VALUES(games_played), " +
    "games_won=VALUES(games_won), games_lost=VALUES(games_lost), games_tied=VALUES(games_tied), " +
    "time_played=VALUES(time_played), cards=VALUES(cards), medals=VALUES(medals), " +
    "gold=VALUES(gold), silver=VALUES(silver), bronze=VALUES(bronze), profile_image=VALUES(profile_image)";

    pool.query(sql, [allData], function (err, result, fields) {
        if (err) throw err;
        console.log("**USER DATA INSERTED**");
    });
}

function insertHeroData(username, platform) {

    // insert data into database
    var allData = [];
    var currData = getHeroData(username, platform);
    allData.push(currData);

    // CHECK FOR HERO - create sql query
    var index = 0;
    var counter = 0;
    for (var i = 0; i < allData.length; i++) {
        if (allData[i] !== null) {
            for (var k = 0; k < allData[i].length; k++) { 
                var sql = "";
                switch (heroestoInsert[counter]) {
                    case "Ana":
                        // code block
                        sql = "INSERT INTO ana (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, EnemiesSlept, NanoBoostAssists," +
                        "NanoBoostsApplied, ScopedAccuracy, UnscopedAccuracy, DefensiveAssists," +
                        "OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), EnemiesSlept=VALUES(EnemiesSlept), NanoBoostAssists=VALUES(NanoBoostAssists)," +
                        "NanoBoostsApplied=VALUES(NanoBoostsApplied), ScopedAccuracy=VALUES(ScopedAccuracy), UnscopedAccuracy=VALUES(UnscopedAccuracy)," +
                        "DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists), HealingDone=VALUES(HealingDone)";
                        break;
                    case "Ashe":
                        // code block
                        sql = "INSERT INTO ashe (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, BobKills, CoachGunKills, DynamiteKills, " +
                        "ScopedAccuracy, ScopedCritAccuracy) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), BobKills=VALUES(BobKills)," +
                        "CoachGunKills=VALUES(CoachGunKills), DynamiteKills=VALUES(DynamiteKills), ScopedAccuracy=VALUES(ScopedAccuracy)," +
                        "ScopedCritAccuracy=VALUES(ScopedCritAccuracy)";
                        break;
                    case "Bastion":
                        // code block
                        sql = "INSERT INTO bastion (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, SelfHealing, ReconKills, SentryKills, TankKills" +
                        ") VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), SelfHealing=VALUES(SelfHealing), ReconKills=VALUES(ReconKills)," +
                        "SentryKills=VALUES(SentryKills), TankKills=VALUES(TankKills)";
                        break;
                    case "Brigitte":
                        // code block
                        sql = "INSERT INTO brigitte (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, ArmorProvided, DamageBlocked, InspireUptime, SelfHealing, " +
                        "DefensiveAssists, OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "ArmorProvided=VALUES(ArmorProvided), DamageBlocked=VALUES(DamageBlocked), InspireUptime=VALUES(InspireUptime)," +
                        "SelfHealing=VALUES(SelfHealing), DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists)," +
                        "HealingDone=VALUES(HealingDone)";
                        break;
                    case "DVa":
                        // code block
                        sql = "INSERT INTO dva (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DamageBlocked, MechDeaths, MechsCalled, " +
                        "SelfDestructKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DamageBlocked=VALUES(DamageBlocked), MechDeaths=VALUES(MechDeaths)," +
                        "MechsCalled=VALUES(MechsCalled), SelfDestructKills=VALUES(SelfDestructKills)";   
                        break;
                    case "Doomfist":
                        // code block
                        sql = "INSERT INTO doomfist (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, AbilityDamageDone, MeteorStrikeKills, ShieldsCreated)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), AbilityDamageDone=VALUES(AbilityDamageDone), " +
                        "MeteorStrikeKills=VALUES(MeteorStrikeKills), ShieldsCreated=VALUES(ShieldsCreated)";
                        break;
                    case "Genji":
                        // code block
                        sql = "INSERT INTO genji (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DamageReflected, DeflectionKills, " +
                        "DragonbladeKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DamageReflected=VALUES(DamageReflected), " +
                        "DeflectionKills=VALUES(DeflectionKills), DragonbladeKills=VALUES(DragonbladeKills)";
                        break;
                    case "Hanzo":
                        // code block
                        sql = "INSERT INTO hanzo (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DragonstrikeKills, StormArrowKills, " +
                        "ReconAssists) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DragonstrikeKills=VALUES(DragonstrikeKills), " +
                        "StormArrowKills=VALUES(StormArrowKills), ReconAssists=VALUES(ReconAssists)";
                        break;
                    case "Junkrat":
                        // code block
                        sql = "INSERT INTO junkrat (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, ConcussionMineKills, EnemiesTrapped, " +
                        "RiptireKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), ConcussionMineKills=VALUES(ConcussionMineKills), " +
                        "EnemiesTrapped=VALUES(EnemiesTrapped), RiptireKills=VALUES(RiptireKills)";
                        break;
                    case "Lúcio":
                        // code block
                        sql = "INSERT INTO lucio (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, SelfHealing, SoundBarriersProvided, " +
                        "DefensiveAssists, OffensiveAssists, HealingDone, EnvironmentalKills) VALUES ? ON DUPLICATE" +
                        " KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), SelfHealing=VALUES(SelfHealing), " +
                        "SoundBarriersProvided=VALUES(SoundBarriersProvided), DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists)," +
                        "HealingDone=VALUES(HealingDone), EnvironmentalKills=VALUES(EnvironmentalKills)";
                        break;
                    case "McCree":
                        // code block
                        sql = "INSERT INTO mccree (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DeadEyeKills, FantheHammerKills) VALUES" +
                        " ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DeadEyeKills=VALUES(DeadEyeKills), " +
                        "FantheHammerKills=VALUES(FantheHammerKills)";
                        break;
                    case "Mei":
                        // code block
                        sql = "INSERT INTO mei (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, BlizzardKills, DamageBlocked, EnemiesFrozen, SelfHealing)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), BlizzardKills=VALUES(BlizzardKills), " +
                        "DamageBlocked=VALUES(DamageBlocked), EnemiesFrozen=VALUES(EnemiesFrozen), SelfHealing=VALUES(SelfHealing)";
                        break;
                    case "Moira":
                        // code block
                        sql = "INSERT INTO moira (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, CoalescenceHealing, CoalescenceKills, SelfHealing, DefensiveAssists, " +
                        "HealingDone) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "CoalescenceHealing=VALUES(CoalescenceHealing), CoalescenceKills=VALUES(CoalescenceKills), SelfHealing=VALUES(SelfHealing)," +
                        "DefensiveAssists=VALUES(DefensiveAssists), HealingDone=VALUES(HealingDone)";
                        break;
                    case "Mercy":
                        // code block
                        sql = "INSERT INTO mercy (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, DamageAmplified, PlayersResurrected, DefensiveAssists, " +
                        "OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), DamageAmplified=VALUES(DamageAmplified), PlayersResurrected=VALUES(PlayersResurrected)," +
                        "DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists), HealingDone=VALUES(HealingDone)";
                        break;
                    case "Orisa":
                        // code block
                        sql = "INSERT INTO orisa (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, DamageAmplified, DamageBlocked, SuperchargerAssists" +
                        ") VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), DamageAmplified=VALUES(DamageAmplified), " +
                        "DamageBlocked=VALUES(DamageBlocked), SuperchargerAssists=VALUES(SuperchargerAssists)";
                        break;   
                    case "Pharah":
                        // code block
                        sql = "INSERT INTO pharah (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, BarrageKills, DirectHitAcc, RocketDirectHits)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), BarrageKills=VALUES(BarrageKills), " +
                        "DirectHitAcc=VALUES(DirectHitAcc), RocketDirectHits=VALUES(RocketDirectHits)";
                        break;
                    case "Reaper":
                        // code block
                        sql = "INSERT INTO reaper (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DeathBlossomKills, SelfHealing)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), " +
                        "DeathBlossomKills=VALUES(DeathBlossomKills), SelfHealing=VALUES(SelfHealing)";
                        break;
                    case "Reinhardt":
                        // code block
                        sql = "INSERT INTO reinhardt (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, ChargeKills, DamageBlocked, EarthshatterKills, FireStrikeKills)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "ChargeKills=VALUES(ChargeKills), DamageBlocked=VALUES(DamageBlocked)," +
                        "EarthshatterKills=VALUES(EarthshatterKills), FireStrikeKills=VALUES(FireStrikeKills)";
                        break;
                    case "Roadhog":
                        // code block
                        sql = "INSERT INTO roadhog (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, EnemiesHooked, HookAccuracy, " +
                        "HooksAttempted, SelfHealing, WholeHogKills, EnvironmentalKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), EnemiesHooked=VALUES(EnemiesHooked), " +
                        "HookAccuracy=VALUES(HookAccuracy), HooksAttempted=VALUES(HooksAttempted), SelfHealing=VALUES(SelfHealing)," +
                        "WholeHogKills=VALUES(WholeHogKills), WholeHogKills=VALUES(WholeHogKills), EnvironmentalKills=VALUES(EnvironmentalKills)";
                        break;
                    case "Soldier: 76":
                        // code block
                        sql = "INSERT INTO soldier (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, BioticFieldHealing, BioticFieldsPlayed, " +
                        "HelixRocketKills, SelfHealing, TacticalVisorKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), BioticFieldHealing=VALUES(BioticFieldHealing), " +
                        "BioticFieldsPlayed=VALUES(BioticFieldsPlayed), HelixRocketKills=VALUES(HelixRocketKills), SelfHealing=VALUES(SelfHealing)," +
                        "TacticalVisorKills=VALUES(TacticalVisorKills)";
                        break;
                    case "Sombra":
                        // code block
                        sql = "INSERT INTO sombra (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, EnemiesEMPd, EnemiesHacked)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), EnemiesEMPd=VALUES(EnemiesEMPd), " +
                        "EnemiesHacked=VALUES(EnemiesHacked)";
                        break;
                    case "Symmetra":
                        // code block
                        sql = "INSERT INTO symmetra (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, DamageBlocked, PlayersTeleported, PrimaryFireAcc, SecondaryFireAcc, " +
                        "SentryTurretKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "DamageBlocked=VALUES(DamageBlocked), PlayersTeleported=VALUES(PlayersTeleported), PrimaryFireAcc=VALUES(PrimaryFireAcc)," +
                        "SecondaryFireAcc=VALUES(SecondaryFireAcc), SentryTurretKills=VALUES(SentryTurretKills)";
                        break;
                    case "Torbjörn":
                        // code block
                        sql = "INSERT INTO torbjorn (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, ArmorPacksCreated, MoltenCoreKills, OverloadKills, " +
                        "TorbjornKills, TurretKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), ArmorPacksCreated=VALUES(ArmorPacksCreated), " +
                        "MoltenCoreKills=VALUES(MoltenCoreKills), OverloadKills=VALUES(OverloadKills), TorbjornKills=VALUES(TorbjornKills)," +
                        "TurretKills=VALUES(TurretKills)";
                        break;
                    case "Tracer":
                        // code block
                        sql = "INSERT INTO tracer (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, HealthRecovered, PulseBombKills, " +
                        "PulseBombsAttached) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), HealthRecovered=VALUES(HealthRecovered), " +
                        "PulseBombKills=VALUES(PulseBombKills), PulseBombsAttached=VALUES(PulseBombsAttached)";
                        break;
                    case "Widowmaker":
                        // code block
                        sql = "INSERT INTO widowmaker (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, ScopedAcc, ScopedCritAcc, VenomMineKills, ReconAssists)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), ScopedAcc=VALUES(ScopedAcc), " +
                        "ScopedCritAcc=VALUES(ScopedCritAcc), VenomMineKills=VALUES(VenomMineKills), ReconAssists=VALUES(ReconAssists)";
                        break;
                    case "Winston":
                        // code block
                        sql = "INSERT INTO winston (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, DamageBlocked, JumpKills, PlayersKnockedBack, " +
                        "PrimalRageKills, WeaponKills) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "DamageBlocked=VALUES(DamageBlocked), JumpKills=VALUES(JumpKills), PlayersKnockedBack=VALUES(PlayersKnockedBack)," +
                        "PrimalRageKills=VALUES(PrimalRageKills), WeaponKills=VALUES(WeaponKills)";
                        break;
                    case "Wrecking Ball":
                        // code block
                        sql = "INSERT INTO wreckingball (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, PlayersKnockedBack) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), PlayersKnockedBack=VALUES(PlayersKnockedBack)";
                        break;
                    case "Zarya":
                        // code block
                        sql = "INSERT INTO zarya (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, AverageEnergy, DamageBlocked, GravitonSurgeKills, " +
                        "HighEnergyKills, PrimaryFireAcc, SecondaryFireAcc, ProjectedBarriersApplied) VALUES ?" +
                        " ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "AverageEnergy=VALUES(AverageEnergy), DamageBlocked=VALUES(DamageBlocked), GravitonSurgeKills=VALUES(GravitonSurgeKills)," +
                        "HighEnergyKills=VALUES(HighEnergyKills), PrimaryFireAcc=VALUES(PrimaryFireAcc), SecondaryFireAcc=VALUES(SecondaryFireAcc)," +
                        "ProjectedBarriersApplied=VALUES(ProjectedBarriersApplied)";
                        break;
                    case "Zenyatta":
                        // code block
                        sql = "INSERT INTO zenyatta (username, season, hero_name, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, SelfHealing, TranscendenceHealing, " +
                        "DefensiveAssists, OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE hero_name=VALUES(hero_name), Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), SelfHealing=VALUES(SelfHealing), " +
                        "TranscendenceHealing=VALUES(TranscendenceHealing), DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists)," +
                        "HealingDone=VALUES(HealingDone)";
                        break;                 
                }

                pool.query(sql, [allData[i][k]], function (err, result, fields) {
                    if (err) throw err;
                });

                counter++;
            }
        }
    }
    console.log("**HERO DATA INSERTED**");
}


// GET DATA FROM API
async function callAPI(user, plat) {
    console.log("BEFORE API CALLS");
    currHTML = await ow.getRawHtmlFromBtag(user, plat);
    console.log("rawhtml");
    compData = await ow.getModeStats(user, 'competitive', plat, currHTML);
    console.log("modestats");
    generalData = await ow.getGeneralStats(user, plat, currHTML);
    console.log("genstats");
    accountData = await ow.getAccountByName(user);
    console.log("accountbyname");
    console.log("AFTER API CALLS");
}
    
// get general user stats from api
function getUserData(user, plat) {
    var currData = [];
    
    if (compData !== undefined
        && compData.career_stats !== undefined
        && compData.career_stats["ALL HEROES"] !== undefined
        && compData.career_stats["ALL HEROES"]["Match Awards"] !== undefined) {
            
        if (plat === 'pc') {
            var pcName = user.replace('#', '-');
            currData.push(pcName);
        } else {
            currData.push(user);
        }
        currData.push(currSeason);
        currData.push(plat);
        currData.push(generalData.rank);
        currData.push(accountData[0].level);
        currData.push(compData.career_stats["ALL HEROES"].Best.EliminationsMostinGame);
        currData.push(compData.career_stats["ALL HEROES"].Best.HealingDoneMostinGame);
        currData.push(compData.career_stats["ALL HEROES"].Best.HeroDamageDoneMostinGame);
        currData.push(compData.career_stats["ALL HEROES"].Assists.HealingDone);
        currData.push(compData.career_stats["ALL HEROES"].Combat.DamageDone);
        currData.push(compData.career_stats["ALL HEROES"].Combat.Eliminations);
        currData.push(compData.career_stats["ALL HEROES"].Combat.Deaths);
        currData.push(compData.career_stats["ALL HEROES"].Combat.TimeSpentonFire);
        currData.push(compData.career_stats["ALL HEROES"].Game.GamesPlayed);
        currData.push(compData.career_stats["ALL HEROES"].Game.GamesWon);
        currData.push(compData.career_stats["ALL HEROES"].Game.GamesLost);
        currData.push(compData.career_stats["ALL HEROES"].Game.GamesTied);
        currData.push(compData.career_stats["ALL HEROES"].Game.TimePlayed);
        currData.push(compData.career_stats["ALL HEROES"]["Match Awards"].Cards);
        currData.push(compData.career_stats["ALL HEROES"]["Match Awards"].Medals);
        currData.push(compData.career_stats["ALL HEROES"]["Match Awards"].MedalsGold);
        currData.push(compData.career_stats["ALL HEROES"]["Match Awards"].MedalsSilver);
        currData.push(compData.career_stats["ALL HEROES"]["Match Awards"].MedalsBronze);
        currData.push(generalData.profile);
    }
    return currData;
}

// get hero user stats from api
function getHeroData(user, plat) {
    var data = [];
    var currData = [];
    heroestoInsert = [];

    // console.log("BEFORE HERO API CALLS");
    // var currHTML = await ow.getRawHtmlFromBtag(user, plat);
    // var compData = await ow.getModeStats(user, 'competitive', plat, currHTML);
    // console.log("AFTER HERO API CALLS");

    for (var i = 0; i < allHeroes.length; i++) {
        if (compData.career_stats[allHeroes[i]] !== undefined
            && compData.career_stats[allHeroes[i]].Combat !== undefined
            && compData.career_stats[allHeroes[i]].Game !== undefined
            && compData.career_stats[allHeroes[i]]["Hero Specific"] !== undefined) {

            // IDENTIFYING INFORMATION
            heroestoInsert.push(allHeroes[i]);
            if (plat === 'pc') {
                var pcName = user.replace('#', '-');
                currData.push(pcName);
            } else {
                currData.push(user);
            }
            currData.push(currSeason);
            if (allHeroes[i] === "DVa" || allHeroes[i] === "dva") {
                currData.push("D.Va");
            } else {
                currData.push(allHeroes[i]);
            }

            // get conversion factor
            var factor = converter.getFactor(compData.career_stats[allHeroes[i]].Game.TimePlayed);

            // UNIVERSAL
            currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Combat.Deaths, factor));
            currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Combat.Eliminations, factor));
            currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Combat.FinalBlows, factor));
            currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Combat.HeroDamageDone, factor));
            currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Combat.ObjectiveKills, factor));
            currData.push(compData.career_stats[allHeroes[i]].Combat.ObjectiveTime);
            currData.push(compData.career_stats[allHeroes[i]].Game.GamesLost);
            currData.push(compData.career_stats[allHeroes[i]].Game.GamesWon);
            currData.push(compData.career_stats[allHeroes[i]].Game.GamesTied);
            currData.push(compData.career_stats[allHeroes[i]].Game.GamesPlayed);
            currData.push(compData.career_stats[allHeroes[i]].Game.TimePlayed);
            currData.push(compData.career_stats[allHeroes[i]].Game.WinPercentage);
    
            // CHECK FOR HERO
            switch (allHeroes[i]) {
                case "Ana":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesSlept, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].NanoBoostAssists, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].NanoBoostsApplied, factor));
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].UnscopedAccuracy);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.HealingDone, factor));
                    } else {
                        currData.push(0);
                        currData.push(0);
                        currData.push(0);
                    }
                    break;
                case "Ashe":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].BobKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].CoachGunKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DynamiteKills, factor));
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedCriticalHitAccuracy);
                    break;
                case "Hanzo":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DragonstrikeKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].StormArrowKills, factor));
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.ReconAssists, factor));
                    } else {
                        currData.push(0);
                    }
                    break;
                case "Lúcio":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SoundBarriersProvided, factor));
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.HealingDone, factor));
                    } else {
                        currData.push(0);
                        currData.push(0);
                        currData.push(0);
                    }
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Combat.EnvironmentalKills, factor));
                    break;
                case "McCree":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DeadEyeKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].FantheHammerKills, factor));
                    break;
                case "Reinhardt":
                    // code block
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].ChargeKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].EarthshatterKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].FireStrikeKills, factor));
                    break;
                case "Roadhog":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesHooked, factor));
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].HookAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].HooksAttempted, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].WholeHogKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Combat.EnvironmentalKills, factor));
                    break;
                case "Widowmaker":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedCriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].VenomMineKills, factor));
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.ReconAssists, factor));
                    } else {
                        currData.push(0);
                    }
                    break;
                case "Moira":
                    // code block
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].CoalescenceHealing, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].CoalescenceKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.HealingDone, factor));
                    } else {
                        currData.push(0);
                        currData.push(0);
                    }
                    break;
                case "Mercy":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageAmplified, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersResurrected, factor));
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.HealingDone, factor));
                    } else {
                        currData.push(0);
                        currData.push(0);
                        currData.push(0);
                    }
                    break;
                case "Bastion":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].ReconKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SentryKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].TankKills, factor));
                    break;
                case "Brigitte":
                    // code block
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].ArmorProvided, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].InspireUptimePercentage);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.HealingDone, factor));
                    } else {
                        currData.push(0);
                        currData.push(0);
                        currData.push(0);
                    }
                    break;
                case "DVa":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].MechDeaths, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].MechsCalled, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfDestructKills, factor));
                    break;
                case "Doomfist":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].AbilityDamageDone, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].MeteorStrikeKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].ShieldsCreated, factor));
                    break;
                case "Genji":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageReflected, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DeflectionKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DragonbladeKills, factor));
                    break;
                case "Junkrat":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].ConcussionMineKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesTrapped, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].RIPTireKills, factor));
                    break;
                case "Mei":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].BlizzardKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemieFrozen, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    break;
                case "Orisa":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageAmplified, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SuperchargerAssists, factor));
                    break;   
                case "Pharah":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].BarrageKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DirectHitAccuracy, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].RocketDirectHits, factor));
                    break;
                case "Reaper":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DeathBlossomKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    break;
                case "Soldier: 76":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].BioticFieldHealingDone, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].BioticFieldsDeployed, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].HelixRocketsKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].TacticalVisorKills, factor));
                    break;
                case "Sombra":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesEMPd, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesHacked, factor));
                    break;
                case "Symmetra":
                    // code block
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersTeleported, factor));
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PrimaryFireAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SecondaryFireAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SentryTurretKills, factor));
                    break;
                case "Torbjörn":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].ArmorPacksCreated, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].MoltenCoreKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].OverloadKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].TorbjörnKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].TurretKills, factor));
                    break;
                case "Tracer":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].HealthRecovered, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].PulseBombKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].PulseBombsAttached, factor));
                    break;
                case "Winston":
                    // code block
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].JumpKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersKnockedBack, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].PrimalRageKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].WeaponKills, factor));
                    break;
                case "Wrecking Ball":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersKnockedBack, factor));
                    break;
                case "Zarya":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].AverageEnergy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].GravitonSurgeKills, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].HighEnergyKills, factor));
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PrimaryFireAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SecondaryFireAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].ProjectedBarriersApplied, factor));
                    break;
                case "Zenyatta":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing, factor));
                    currData.push(converter.perTen(compData.career_stats[allHeroes[i]]["Hero Specific"].TranscendenceHealing, factor));
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists, factor));
                        currData.push(converter.perTen(compData.career_stats[allHeroes[i]].Assists.HealingDone, factor));
                    } else {
                        currData.push(0);
                        currData.push(0);
                        currData.push(0);
                    }
                    break;                 
            }
            var tempData = [];
            tempData.push(currData);
            data.push(tempData);
            currData = [];
        }
    }
    
    return data;
}