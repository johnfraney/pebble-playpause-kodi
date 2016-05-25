var button_options = [
  {
    "label": "Up",
    "value": "Input.Up",
  },
  {
    "label": "Right",
    "value": "Input.Right",
  },
  {
    "label": "Down",
    "value": "Input.Down",
  },
  {
    "label": "Left",
    "value": "Input.Left",
  },
  {
    "label": "Back",
    "value": "Input.Back",
  },
  {
    "label": "Select",
    "value": "Input.Select",
  },
  {
    "label": "Play/Pause",
    "value": "Player.PlayPause",
  },
];

module.exports = [
  {
    "type": "heading",
    "id": "main-heading",
    "defaultValue": "PlayPause for Kodi",
    "size": 1
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Top Button Actions"
      },
      {
        "type": "select",
        "appKey": "topShortAction",
        "defaultValue": "Input.Up",
        "label": "Short Press",
        "options": button_options,
        "attributes": {
          "required": "required"
        }
      },
      {
        "type": "select",
        "appKey": "topLongAction",
        "defaultValue": "Input.Left",
        "label": "Long Press",
        "options": button_options
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Middle Button Actions"
      },
      {
        "type": "select",
        "appKey": "middleShortAction",
        "defaultValue": "Player.PlayPause",
        "label": "Short Press",
        "options": button_options,
        "attributes": {
          "required": "required"
        }
      },
      {
        "type": "select",
        "appKey": "middleLongAction",
        "defaultValue": "",
        "label": "Long Press",
        "options": button_options
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Bottom Button Actions"
      },
      {
        "type": "select",
        "appKey": "bottomShortAction",
        "defaultValue": "Input.Down",
        "label": "Short Press",
        "options": button_options,
        "attributes": {
          "required": "required"
        }
      },
      {
        "type": "select",
        "appKey": "bottomLongAction",
        "defaultValue": "Input.Right",
        "label": "Long Press",
        "options": button_options
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Media Centre Preferences"
      },
      {
        "type": "input",
        "appKey": "kodiURL",
        "label": "Kodi Address (including port, e.g. 192.168.1.10:8080)"
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "submit",
        "defaultValue": "Save"
      }
    ]
  }
];