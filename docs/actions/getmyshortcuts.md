
## Get My Shortcuts / GetMyShortcuts (internally `is.workflow.actions.getmyworkflows`)


## description

### summary

Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts.


### usage
```
GetMyShortcuts 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetMyWorkflowsAction",
	"ActionKeywords": [
		"installed",
		"downloaded",
		"workflow"
	],
	"AppIdentifier": "com.apple.shortcuts",
	"Category": "Scripting",
	"CreationDate": "2015-08-16T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts."
	},
	"Name": "Get My Shortcuts",
	"Output": {
		"Multiple": true,
		"OutputName": "My Shortcuts",
		"Types": [
			"WFWorkflowRecord"
		]
	},
	"ParameterSummary": "Get my shortcuts",
	"Subcategory": "Shortcuts",
	"SuggestedNever": true
}
```
