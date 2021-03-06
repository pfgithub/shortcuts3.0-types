
## Show Alert / ShowAlert (internally `is.workflow.actions.alert`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut.


### usage
```
ShowAlert title="string" message="string" showCancelButton=(true | false | variable)
```

### arguments

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### message: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Informational message"`
**Default Value**: `"Do you want to continue?"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

---

### showCancelButton: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
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
	"ActionClass": "WFAlertAction",
	"ActionKeywords": [
		"message",
		"ask",
		"display",
		"prompt",
		"show",
		"confirmation"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut."
	},
	"IconName": "Scripting.png",
	"InputPassthrough": true,
	"Name": "Show Alert",
	"ParameterSummary": "Show alert ${WFAlertActionMessage}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAlertActionTitle",
			"Label": "Title",
			"Placeholder": "optional"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "Do you want to continue?",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAlertActionMessage",
			"Label": "Message",
			"Multiline": true,
			"Placeholder": "Informational message"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAlertActionCancelButtonShown",
			"Label": "Show Cancel Button"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Notification"
}
```
