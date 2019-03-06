// insert data into database
con.connect(async function(err) {
    if (err) throw err;
    
    var allData = [];
    for (var j = 0; j < usernames.length; j++) {
        var currData = await getData(usernames[j], platforms[j]);
        console.log(usernames[j] + " pushed");
        allData.push(currData);
    }

    // CHECK FOR HERO - create sql query
    var index = 0;
    var counter = 0;
    for (var i = 0; i < allData.length; i++) {
        if (allData[i] !== null) {
            for (var k = 0; k < allData[i].length; k++) { 
                // console.log(allData[i][k][0][0]);
                var sql = "";
                switch (heroestoInsert[counter]) {
                    case "Ana":
                        // code block
                        sql = "INSERT INTO ana (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, EnemiesSlept, NanoBoostAssists," +
                        "NanoBoostsApplied, ScopedAccuracy, UnscopedAccuracy, DefensiveAssists," +
                        "OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
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
                        sql = "INSERT INTO ashe (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, BobKills, CoachGunKills, DynamiteKills, " +
                        "ScopedAccuracy, ScopedCritAccuracy) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
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
                        sql = "INSERT INTO bastion (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, SelfHealing, ReconKills, SentryKills, TankKills" +
                        ") VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), SelfHealing=VALUES(SelfHealing), ReconKills=VALUES(ReconKills)," +
                        "SentryKills=VALUES(SentryKills), TankKills=VALUES(TankKills)";
                        break;
                    case "Brigitte":
                        // code block
                        sql = "INSERT INTO brigitte (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, ArmorProvided, DamageBlocked, InspireUptime, SelfHealing, " +
                        "DefensiveAssists, OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "ArmorProvided=VALUES(ArmorProvided), DamageBlocked=VALUES(DamageBlocked), InspireUptime=VALUES(InspireUptime)," +
                        "SelfHealing=VALUES(SelfHealing), DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists)," +
                        "HealingDone=VALUES(HealingDone)";
                        break;
                    case "D.Va":
                        // code block
                        sql = "INSERT INTO dva (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DamageBlocked, MechDeaths, MechsCalled, " +
                        "SelfDestructKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DamageBlocked=VALUES(DamageBlocked), MechDeaths=VALUES(MechDeaths)," +
                        "MechsCalled=VALUES(MechsCalled), SelfDestructKills=VALUES(SelfDestructKills)";   
                        break;
                    case "Doomfist":
                        // code block
                        sql = "INSERT INTO doomfist (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, AbilityDamageDone, MeteorStrikeKills, ShieldsCreated)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), AbilityDamageDone=VALUES(AbilityDamageDone), " +
                        "MeteorStrikeKills=VALUES(MeteorStrikeKills), ShieldsCreated=VALUES(ShieldsCreated)";
                        break;
                    case "Genji":
                        // code block
                        sql = "INSERT INTO genji (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DamageReflected, DeflectionKills, " +
                        "DragonbladeKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DamageReflected=VALUES(DamageReflected), " +
                        "DeflectionKills=VALUES(DeflectionKills), DragonbladeKills=VALUES(DragonbladeKills)";
                        break;
                    case "Hanzo":
                        // code block
                        sql = "INSERT INTO hanzo (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DragonstrikeKills, StormArrowKills, " +
                        "ReconAssists) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DragonstrikeKills=VALUES(DragonstrikeKills), " +
                        "StormArrowKills=VALUES(StormArrowKills), ReconAssists=VALUES(ReconAssists)";
                        break;
                    case "Junkrat":
                        // code block
                        sql = "INSERT INTO junkrat (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, ConcussionMineKills, EnemiesTrapped, " +
                        "RiptireKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), ConcussionMineKills=VALUES(ConcussionMineKills), " +
                        "EnemiesTrapped=VALUES(EnemiesTrapped), RiptireKills=VALUES(RiptireKills)";
                        break;
                    case "Lúcio":
                        // code block
                        sql = "INSERT INTO lucio (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, SelfHealing, SoundBarriersProvided, " +
                        "DefensiveAssists, OffensiveAssists, HealingDone, EnvironmentalKills) VALUES ? ON DUPLICATE" +
                        " KEY UPDATE Deaths=VALUES(Deaths)," +
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
                        sql = "INSERT INTO mccree (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DeadEyeKills, FantheHammerKills) VALUES" +
                        " ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), DeadEyeKills=VALUES(DeadEyeKills), " +
                        "FantheHammerKills=VALUES(FantheHammerKills)";
                        break;
                    case "Mei":
                        // code block
                        sql = "INSERT INTO mei (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, BlizzardKills, DamageBlocked, EnemiesFrozen, SelfHealing)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), BlizzardKills=VALUES(BlizzardKills), " +
                        "DamageBlocked=VALUES(DamageBlocked), EnemiesFrozen=VALUES(EnemiesFrozen), SelfHealing=VALUES(SelfHealing)";
                        break;
                    case "Moira":
                        // code block
                        sql = "INSERT INTO moira (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, CoalescenceHealing, CoalescenceKills, SelfHealing, DefensiveAssists, " +
                        "HealingDone) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "CoalescenceHealing=VALUES(CoalescenceHealing), CoalescenceKills=VALUES(CoalescenceKills), SelfHealing=VALUES(SelfHealing)," +
                        "DefensiveAssists=VALUES(DefensiveAssists), HealingDone=VALUES(HealingDone)";
                        break;
                    case "Mercy":
                        // code block
                        sql = "INSERT INTO mercy (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, DamageAmplified, PlayersResurrected, DefensiveAssists, " +
                        "OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), DamageAmplified=VALUES(DamageAmplified), PlayersResurrected=VALUES(PlayersResurrected)," +
                        "DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists), HealingDone=VALUES(HealingDone)";
                        break;
                    case "Orisa":
                        // code block
                        sql = "INSERT INTO orisa (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, DamageAmplified, DamageBlocked, SuperchargerAssists" +
                        ") VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), DamageAmplified=VALUES(DamageAmplified), " +
                        "DamageBlocked=VALUES(DamageBlocked), SuperchargerAssists=VALUES(SuperchargerAssists)";
                        break;   
                    case "Pharah":
                        // code block
                        sql = "INSERT INTO pharah (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, BarrageKills, DirectHitAcc, RocketDirectHits)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), BarrageKills=VALUES(BarrageKills), " +
                        "DirectHitAcc=VALUES(DirectHitAcc), RocketDirectHits=VALUES(RocketDirectHits)";
                        break;
                    case "Reaper":
                        // code block
                        sql = "INSERT INTO reaper (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, DeathBlossomKills, SelfHealing)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), " +
                        "DeathBlossomKills=VALUES(DeathBlossomKills), SelfHealing=VALUES(SelfHealing)";
                        break;
                    case "Reinhardt":
                        // code block
                        sql = "INSERT INTO reinhardt (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, ChargeKills, DamageBlocked, EarthshatterKills, FireStrikeKills)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "ChargeKills=VALUES(ChargeKills), DamageBlocked=VALUES(DamageBlocked)," +
                        "EarthshatterKills=VALUES(EarthshatterKills), FireStrikeKills=VALUES(FireStrikeKills)";
                        break;
                    case "Roadhog":
                        // code block
                        sql = "INSERT INTO roadhog (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, EnemiesHooked, HookAccuracy, " +
                        "HooksAttempted, SelfHealing, WholeHogKills, EnvironmentalKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), EnemiesHooked=VALUES(EnemiesHooked), " +
                        "HookAccuracy=VALUES(HookAccuracy), HooksAttempted=VALUES(HooksAttempted), SelfHealing=VALUES(SelfHealing)," +
                        "WholeHogKills=VALUES(WholeHogKills), WholeHogKills=VALUES(WholeHogKills), EnvironmentalKills=VALUES(EnvironmentalKills)";
                        break;
                    case "Soldier":
                        // code block
                        sql = "INSERT INTO soldier (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, BioticFieldHealing, BioticFieldsPlayed, " +
                        "HelixRocketKills, SelfHealing, TacticalVisorKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
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
                        sql = "INSERT INTO sombra (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, EnemiesEMPd, EnemiesHacked)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), EnemiesEMPd=VALUES(EnemiesEMPd), " +
                        "EnemiesHacked=VALUES(EnemiesHacked)";
                        break;
                    case "Symmetra":
                        // code block
                        sql = "INSERT INTO symmetra (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, DamageBlocked, PlayersTeleported, PrimaryFireAcc, SecondaryFireAcc, " +
                        "SentryTurretKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "DamageBlocked=VALUES(DamageBlocked), PlayersTeleported=VALUES(PlayersTeleported), PrimaryFireAcc=VALUES(PrimaryFireAcc)," +
                        "SecondaryFireAcc=VALUES(SecondaryFireAcc), SentryTurretKills=VALUES(SentryTurretKills)";
                        break;
                    case "Torbjörn":
                        // code block
                        sql = "INSERT INTO torbjorn (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, ArmorPacksCreated, MoltenCoreKills, OverloadKills, " +
                        "TorbjornKills, TurretKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
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
                        sql = "INSERT INTO tracer (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, HealthRecovered, PulseBombKills, " +
                        "PulseBombsAttached) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), HealthRecovered=VALUES(HealthRecovered), " +
                        "PulseBombKills=VALUES(PulseBombKills), PulseBombsAttached=VALUES(PulseBombsAttached)";
                        break;
                    case "Widowmaker":
                        // code block
                        sql = "INSERT INTO widowmaker (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, ScopedAcc, ScopedCritAcc, VenomMineKills, ReconAssists)" +
                        " VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), ScopedAcc=VALUES(ScopedAcc), " +
                        "ScopedCritAcc=VALUES(ScopedCritAcc), VenomMineKills=VALUES(VenomMineKills), ReconAssists=VALUES(ReconAssists)";
                        break;
                    case "Winston":
                        // code block
                        sql = "INSERT INTO winston (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, DamageBlocked, JumpKills, PlayersKnockedBack, " +
                        "PrimalRageKills, WeaponKills) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "DamageBlocked=VALUES(DamageBlocked), JumpKills=VALUES(JumpKills), PlayersKnockedBack=VALUES(PlayersKnockedBack)," +
                        "PrimalRageKills=VALUES(PrimalRageKills), WeaponKills=VALUES(WeaponKills)";
                        break;
                    case "Wrecking Ball":
                        // code block
                        sql = "INSERT INTO wreckingball (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, PlayersKnockedBack) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), PlayersKnockedBack=VALUES(PlayersKnockedBack)";
                        break;
                    case "Zarya":
                        // code block
                        sql = "INSERT INTO zarya (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, AverageEnergy, DamageBlocked, GravitonSurgeKills, " +
                        "HighEnergyKills, PrimaryFireAcc, SecondaryFireAcc, ProjectedBarriersApplied) VALUES ?" +
                        " ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
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
                        sql = "INSERT INTO zenyatta (username, season, Deaths, Elims, FinalBlows, HeroDamageDone," +
                        "ObjectiveKills, ObjectiveTime, GamesLost, GamesWon, GamesTied, GamesPlayed," + 
                        "TimePlayed, WinPercentage, WeaponAccuracy, CritHitAcc, SelfHealing, TranscendenceHealing, " +
                        "DefensiveAssists, OffensiveAssists, HealingDone) VALUES ? ON DUPLICATE KEY UPDATE Deaths=VALUES(Deaths)," +
                        "Elims=VALUES(Elims), FinalBlows=VALUES(FinalBlows), HeroDamageDone=VALUES(HeroDamageDone)," +
                        "ObjectiveKills=VALUES(ObjectiveKills), ObjectiveTime=VALUES(ObjectiveTime)," +
                        "GamesLost=VALUES(GamesLost), GamesWon=VALUES(GamesWon), GamesTied=VALUES(GamesTied)," +
                        "GamesPlayed=VALUES(GamesPlayed), TimePlayed=VALUES(TimePlayed), WinPercentage=VALUES(WinPercentage)," +
                        "WeaponAccuracy=VALUES(WeaponAccuracy), CritHitAcc=VALUES(CritHitAcc), SelfHealing=VALUES(SelfHealing), " +
                        "TranscendenceHealing=VALUES(TranscendenceHealing), DefensiveAssists=VALUES(DefensiveAssists), OffensiveAssists=VALUES(OffensiveAssists)," +
                        "HealingDone=VALUES(HealingDone)";
                        break;                 
                }

                //console.log("Hero: " + heroestoInsert[counter] + " | Length: " + allData[i][k][0].length);
                //console.log("sql: " + sql + '\n');

                con.query(sql, [allData[i][k]], function (err, result, fields) {
                    if (err) throw err;
                    console.log("records inserted");
                });

                counter++;
            }
        }
    }

    var allData = [];
    for (var i = 0; i < usernames.length; i++) {
        var currData = await getData(usernames[i], platforms[i]);
        allData.push(currData);
        console.log(usernames[i] + " pushed | " + currData);
    }

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

    con.query(sql, [allData], function (err, result, fields) {
        if (err) throw err;
        console.log("records inserted");
    });
});

// function to get data from api
async function getData(user, plat) {
    var data = [];
    var currData = [];
    var isPrivate = false;
    
    var currHTML = await ow.getRawHtmlFromBtag(user, plat).catch((err) => {
        if (err = "ACCOUNT_PRIVATE") {
            isPrivate = true;
        }
    });
    var generalData = await ow.getGeneralStats(user, plat, currHTML).catch((err) => {
        if (err = "ACCOUNT_PRIVATE") {
            isPrivate = true;
        }
    });
    var accountData = await ow.getAccountByName(user).catch((err) => {
        if (err = "ACCOUNT_PRIVATE") {
            isPrivate = true;
        }
    });
    var compData = await ow.getModeStats(user, 'competitive', plat, currHTML).catch((err) => {
        if (err = "ACCOUNT_PRIVATE") {
            isPrivate = true;
        }
    });
    if (isPrivate) {
        console.log("private");
        return null;
    }
    if (compData !== undefined
        && compData.career_stats !== undefined
        && compData.career_stats["ALL HEROES"] !== undefined
        && compData.career_stats["ALL HEROES"]["Match Awards"] !== undefined) {
        console.log("hi");
        currData.push(user);
        currData.push(currSeason);
        currData.push(plat);
        currData.push(generalData.rank);
        currData.push(accountData[accountData.length - 1].level);
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
    /*
    for (var i = 0; i < allHeroes.length; i++) {
        if (compData.career_stats[allHeroes[i]] !== undefined
            && compData.career_stats[allHeroes[i]].Combat !== undefined
            && compData.career_stats[allHeroes[i]].Game !== undefined
            && compData.career_stats[allHeroes[i]]["Hero Specific"] !== undefined) {

            // IDENTIFYING INFORMATION
            heroestoInsert.push(allHeroes[i]);
            currData.push(user);
            currData.push(currSeason);

            // UNIVERSAL
            currData.push(compData.career_stats[allHeroes[i]].Combat.Deaths);
            currData.push(compData.career_stats[allHeroes[i]].Combat.Eliminations);
            currData.push(compData.career_stats[allHeroes[i]].Combat.FinalBlows);
            currData.push(compData.career_stats[allHeroes[i]].Combat.HeroDamageDone);
            currData.push(compData.career_stats[allHeroes[i]].Combat.ObjectiveKills);
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
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesSlept);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].NanoBoostAssists);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].NanoBoostsApplied);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].UnscopedAccuracy);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.HealingDone);
                    } else {
                        currData.push(null);
                        currData.push(null);
                        currData.push(null);
                    }
                    break;
                case "Ashe":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].BobKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].CoachGunKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DynamiteKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedCriticalHitAccuracy);
                    break;
                case "Hanzo":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DragonstrikeKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].StormArrowKills);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.ReconAssists);
                    } else {
                        currData.push(null);
                    }
                    break;
                case "Lúcio":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SoundBarriersProvided);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.HealingDone);
                    } else {
                        currData.push(null);
                        currData.push(null);
                        currData.push(null);
                    }
                    currData.push(compData.career_stats[allHeroes[i]].Combat.EnvironmentalKills);
                    break;
                case "McCree":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DeadEyeKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].FantheHammerKills);
                    break;
                case "Reinhardt":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ChargeKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].EarthshatterKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].FirestrikeKills);
                    break;
                case "Roadhog":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesHooked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].HookAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].HooksAttempted);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].WholeHogKills);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.EnvironmentalKills);
                    break;
                case "Widowmaker":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ScopedCriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].VenomMineKills);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.ReconAssists);
                    } else {
                        currData.push(null);
                    }
                    break;
                case "Moira":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].CoalescenceHealing);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].CoalescenceKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.HealingDone);
                    } else {
                        currData.push(null);
                        currData.push(null);
                    }
                    break;
                case "Mercy":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageAmplified);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersResurrected);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.HealingDone);
                    } else {
                        currData.push(null);
                        currData.push(null);
                        currData.push(null);
                    }
                    break;
                case "Bastion":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ReconKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SentryKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].TankKills);
                    break;
                case "Brigitte":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ArmorProvided);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].InspireUptimePercentage);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.HealingDone);
                    } else {
                        currData.push(null);
                        currData.push(null);
                        currData.push(null);
                    }
                    break;
                case "D.Va":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].MechDeaths);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].MechsCalled);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfDestructKills);
                    break;
                case "Doomfist":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].AbilityDamageDone);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].MeteorStrikeKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ShieldsCreated);
                    break;
                case "Genji":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageReflected);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DeflectionKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DragonbladeKills);
                    break;
                case "Junkrat":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ConcussionMineKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesTrapped);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].RiptireKills);
                    break;
                case "Mei":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].BlizzardKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemieFrozen);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    break;
                case "Orisa":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageAmplified);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SuperchargerAssists);
                    break;   
                case "Pharah":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].BarrageKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DirectHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].RokcetDirectHits);
                    break;
                case "Reaper":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DeathBlossomKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    break;
                case "Soldier":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].BioticFieldHealingDone);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].BioticFieldsDeployed);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].HelixRocketKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].TacticalVisorKills);
                    break;
                case "Sombra":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesEMPd);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].EnemiesHacked);
                    break;
                case "Symmetra":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersTeleported);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PrimaryFireAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SecondaryFireAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SentryTurretKills);
                    break;
                case "Torbjörn":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ArmorPacksCreated);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].MoltenCoreKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].OverloadKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].TorbjörnKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].TurretKills);
                    break;
                case "Tracer":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].HealthRecovered);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PulseBombKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PulseBombsAttached);
                    break;
                case "Winston":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].JumpKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersKnockedBack);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PrimalRageKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].WeaponKills);
                    break;
                case "Wrecking Ball":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PlayersKnockedBack);
                    break;
                case "Zarya":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].AverageEnergy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].DamageBlocked);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].GravitonSurgeKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].HighEnergyKills);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].PrimaryFireAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SecondaryFireAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].ProjectedBarriersApplied);
                    break;
                case "Zenyatta":
                    // code block
                    currData.push(compData.career_stats[allHeroes[i]].Combat.WeaponAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]].Combat.CriticalHitAccuracy);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].SelfHealing);
                    currData.push(compData.career_stats[allHeroes[i]]["Hero Specific"].TranscendenceHealing);
                    if (compData.career_stats[allHeroes[i]].Assists !== undefined) {
                        currData.push(compData.career_stats[allHeroes[i]].Assists.DefensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.OffensiveAssists);
                        currData.push(compData.career_stats[allHeroes[i]].Assists.HealingDone);
                    } else {
                        currData.push(null);
                        currData.push(null);
                        currData.push(null);
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
    */
}
//THIS IS WHERE DATABASE INSERTION ENDS
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

        con.query(sql, [allData], function (err, result, fields) {
            if (err) throw err;
            console.log("records inserted");
        });

        var allData = [];
    for (var i = 0; i < usernames.length; i++) {
        var currData = await getData(usernames[i], platforms[i]);
        allData.push(currData);
        console.log(usernames[i] + " pushed | " + currData);
    }