
## Continue Shortcut in App / ContinueShortcutinApp (internally `is.workflow.actions.handoff`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Switches into the Shortcuts app and continues to the next action.


### usage
```
ContinueShortcutinApp 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFHandoffAction",
	"ActionKeywords": [
		"apple",
		"watch",
		"send",
		"phone",
		"transfer",
		"switch",
		"handoff",
		"continuity",
		"workflow"
	],
	"Category": "Scripting",
	"CreationDate": "2015-08-20T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Switches into the Shortcuts app and continues to the next action."
	},
	"IconName": "HandoffAction.png",
	"InputPassthrough": true,
	"Name": "Continue Shortcut in App",
	"ParameterSummary": "Continue shortcut in app",
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Control Flow"
}
```
