var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '* * * * * *', /* Run every second. Edit this to your choosing */
  onTick: function() {
    /*
     * Runs every second. Define your action inside this function
     * Eg: Fetching data on a regular interval etc
     */
    console.log('A second has passed');
  },
  onComplete: function() {
    /* This function is executed when the job stops */
    console.log('Job has stopped');
  },
  start: false, /* Start the job right now */
  timeZone: 'America/Los_Angeles'
});

job.start();