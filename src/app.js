/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

// Config
var Settings = require('settings');
var Clay = require('./clay');
var clayConfig = require('./config');
var clay = new Clay(clayConfig, null, {autoHandleEvents: false});

var kodi_url = 'http://' + Settings.option('kodi_url') + '/jsonrpc';


// UI
var main = new UI.Card({
  title: 'PlayPause',
  icon: 'images/menu_icon.png',
  subtitle: 'A Kodi remote',
  body: 'Button mash.',
  titleColor: 'white',
  subtitleColor: 'white',
  bodyColor: 'white',
  backgroundColor: '#00AAFF'
});

main.show();


// Functionality
function send_kodi_post(command) {
  // Set up common Kodi HTTP POST data
  var post_data = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": command
  };
  
  // Add POST data.params if needed by the method
  if (command == 'Player.PlayPause') {
    post_data.params = { "playerid": 0 };
  }
    
  // Make AJAX POST to kodi_url
  ajax(
    {
      url: kodi_url,
      method: 'post',
      type: 'json',
      data: post_data
    },
    function(data, status, request) {
      console.log('Message: ' + JSON.stringify(data));
    },
    function(error, status, request) {
      console.log('The ajax request failed: ' + JSON.stringify(error));
    }
  );
}

// Up button clicks
main.on('click', 'up', function(e) {
  send_kodi_post("Input.Up");
});

// Select button clicks
main.on('click', 'select', function(e) {
  send_kodi_post("Input.Select");
});

main.on('longClick', 'select', function(e) {
  send_kodi_post("Player.PlayPause");
});

// Down button clicks
main.on('click', 'down', function(e) {
  send_kodi_post("Input.Down");
});

main.on('longClick', 'down', function(e) {
  send_kodi_post("Input.Back");
});


// Config events
Pebble.addEventListener('showConfiguration', function(e) {
  Pebble.openURL(clay.generateUrl());
});

Pebble.addEventListener('webviewclosed', function(e) {
  if (e && !e.response) {
    return;
  }
  var dict = clay.getSettings(e.response);

  // Save the Clay settings to the Settings module. 
  Settings.option(dict);
});