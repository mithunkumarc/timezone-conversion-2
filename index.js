let moment = require('moment')
let moment_tz = require('moment-timezone')


function testData(interval){
  //let interval = '10/23/2019 02:00 AM - 02:30 AM';
  let intervalDate = interval.slice(0,10);//date
  let startInterval = interval.slice(11,19);//start intervalDate
  let endInterval = interval.slice(22);//end intervalDate

  let startIntervalLocal = getLocalTimezone(intervalDate,startInterval);
  //console.log(startIntervalLocal);
  let endIntervalLocal = getLocalTimezone(intervalDate,endInterval);
  //console.log(endIntervalLocal);

  let finalDateInterval = startIntervalLocal.slice(0,10)+" "+startIntervalLocal.slice(11)+" - "+endIntervalLocal.slice(11);
  console.log('before ::',interval);
  console.log('after  ::',finalDateInterval);

  function getLocalTimezone(date,time){
      let dateFormat = 'MM/DD/YYYY hh:mm A';
      let browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let localTime = moment(date+" "+time).tz('America/Anchorage').format(dateFormat);   
      return moment(localTime).tz('Asia/Kolkata').format(dateFormat);
  }
}
//console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);



let data = ['10/23/2019 02:00 AM - 03:00 AM', '10/23/2019 03:00 AM - 03:30 AM', '10/23/2019 11:30 AM - 12:00 PM', '10/23/2019 12:30 PM - 01:00 PM', '10/23/2019 01:00 PM - 01:30 PM']
data.forEach(d => testData(d));
