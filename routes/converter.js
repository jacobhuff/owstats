module.exports = {
    getFactor: function(timePlayed) {
        var timeArray = timePlayed.split(':');
        if (timeArray[2] === undefined) {
            // user has played less than 1 hour
            // get minutes and divide by 10
            var factor = parseInt(timeArray[0], 10) / 10;
        } else {
            // user has played more than 1 hour
            // convert hours to minutes, add to minutes and divide by 10
            var hours = parseInt(timeArray[0], 10);
            var minutes = parseInt(timeArray[1], 10);
            var totalMinutes = (hours * 60) + minutes;
            var factor = totalMinutes / 10;
        }
        return factor;
    },

    perTen: function(value, factor) {
        if (value > 0) {
            return (value / factor).toFixed(2);
        } else {
            return 0;
        }
    }
}