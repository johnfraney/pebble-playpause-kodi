/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

// Config
var Settings = require('settings');
var Clay = require('./clay');
var clayConfig = require('./config');
var clay = new Clay(clayConfig, null, {autoHandleEvents: false});

var kodi_url = 'http://' + Settings.option('kodi_url') + '/jsonrpc';
console.log(kodi_url);

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

main.on('click', 'up', function(e) {
  ajax(
  {
    url: kodi_url,
    method: 'post',
    type: 'json',
    data: {"jsonrpc": "2.0", "method": "Input.Up", "id": 1}
  },
  function(data, status, request) {
    console.log('Message: ' + data);
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  }
);
});

main.on('click', 'select', function(e) {
  ajax(
  {
    url: kodi_url,
    method: 'post',
    type: 'json',
    data: {"jsonrpc": "2.0", "method": "Input.Select", "id": 1}
  },
  function(data, status, request) {
    console.log('Message: ' + data);
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  }
);
});

main.on('longClick', 'select', function(e) {
  ajax(
  {
    url: kodi_url,
    method: 'post',
    type: 'json',
    data: {"jsonrpc": "2.0", "method": "Player.PlayPause", "params": { "playerid": 0 }, "id": 1}
  },
  function(data, status, request) {
    console.log('Message: ' + data);
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  }
);
});

main.on('click', 'down', function(e) {
  ajax(
  {
    url: kodi_url,
    method: 'post',
    type: 'json',
    data: {"jsonrpc": "2.0", "method": "Input.Down", "id": 1}
  },
  function(data, status, request) {
    console.log('Message: ' + data);
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  }
);
});

main.on('longClick', 'down', function(e) {
  ajax(
  {
    url: kodi_url,
    method: 'post',
    type: 'json',
    data: {"jsonrpc": "2.0", "method": "Input.Back", "id": 1}
  },
  function(data, status, request) {
    console.log('Message: ' + data);
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  }
);
});

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