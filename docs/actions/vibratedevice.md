
## Vibrate Device / VibrateDevice (internally `is.workflow.actions.vibrate`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Vibrates the device for a short amount of time.


### usage
```
VibrateDevice ("Default" | "Up Direction" | "Down Direction" | "Success" | "Failure" | "Retry" | "Start" | "Stop" | "Click")
```

### arguments

---

### hapticPattern: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Default"`
**Allows Variables**: true

**Only enabled if**: Workflow type is `WatchKit`. This action is always enabled inside Shortcutslang.

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or variable
containing one of the options:

- `Default`
- `Up Direction`
- `Down Direction`
- `Success`
- `Failure`
- `Retry`
- `Start`
- `Stop`
- `Click`

---

### source json (for developers)

```json
{
	"ActionClass": "WFVibrateAction",
	"ActionKeywords": [
		"vibration",
		"taptic",
		"haptic",
		"notification",
		"alert"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Vibrates the device for a short amount of time."
	},
	"IconName": "Notification.png",
	"InputPassthrough": true,
	"Name": "Vibrate Device",
	"ParameterSummary": "Vibrate device",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Default",
			"Description": "When run on Apple Watch, the selected pattern will be tapped on to your wrist.",
			"Hidden": true,
			"Items": [
				"Default",
				"Up Direction",
				"Down Direction",
				"Success",
				"Failure",
				"Retry",
				"Start",
				"Stop",
				"Click"
			],
			"Key": "WFVibrateHapticType",
			"Label": "Haptic Pattern",
			"RequiredResources": [
				{
					"WFResourceClass": "WFWorkflowTypeResource",
					"WFWorkflowType": "WatchKit"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeCapabilities": [
					"Vibration"
				]
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"Subcategory": "Notification"
}
```
