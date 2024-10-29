import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}


  // Add elements in the specified order
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind the debounced updateCounter function to the button click event
  $('#start-button').on('click', _.debounce(updateCounter, 300));

