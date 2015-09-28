require('bootstrap');
require('../styles/styles');
var moment = require('moment');

var timerEl = $('.timer');

setInterval(function(){
  timerEl.html(moment().format('h:mm:ss a'));
},1000);
