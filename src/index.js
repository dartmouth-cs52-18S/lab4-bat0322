import $ from 'jquery';
import './style.scss';

let seconds = 0;

setInterval(() => {
  $('#main').html(`You've been on this page for ${seconds} seconds!`);
  seconds += 1;
}, 1000);

// $('#main').html('Here we go!');
