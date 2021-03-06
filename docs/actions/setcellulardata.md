
## Set Cellular Data / SetCellularData (internally `is.workflow.actions.cellulardata.set`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Sets the device’s Cellular Data to on or off.


### usage
```
SetCellularData (true | false | variable)
```

### arguments

---

### cellularData: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ACECommandClass": "SASettingSetCellularData",
	"ACESettingValueKey": "OnValue",
	"ActionClass": "WFACESetSettingAction",
	"ActionKeywords": [
		"service",
		"phone",
		"airplane"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Cellular Data to on or off."
	},
	"IconName": "CellularData.png",
	"InputPassthrough": true,
	"Name": "Set Cellular Data",
	"ParameterSummary": "Turn Cellular Data ${OnValue}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "OnValue",
			"Label": "Cellular Data"
		}
	],
	"RequiredResources": [
		"WFSiriAccessResource"
	],
	"Subcategory": "Network",
	"UnsupportedEnvironments": [
		"WatchOS"
	]
}
```
