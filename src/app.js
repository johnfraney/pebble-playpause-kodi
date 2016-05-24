/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

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

var kodi_url = 'http://192.168.2.16:8080/jsonrpc';

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

Pebble.addEventListener('showConfiguration', function() {
  var url = 'http://example.com/config.html';

  Pebble.openURL(url);
});