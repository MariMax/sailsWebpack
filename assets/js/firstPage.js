require('bootstrap');
require('../styles/styles');
var moment = require('moment');
var modernizr = require('modernizr');


if (modernizr.touch){
  $('.touch').html('you may touch');
}

var timerEl = $('.timer');

setInterval(function(){
  timerEl.html(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000);
