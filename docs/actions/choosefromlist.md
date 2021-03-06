
## Choose from List / ChoosefromList (internally `is.workflow.actions.choosefromlist`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Presents a menu of the items passed as input to the action and outputs the user's selection.


### usage
```
ChoosefromList list=(v:myvar | mv:myvar | s:myvar) prompt="string" selectMultiple=(true | false | variable) selectAllInitially=(true | false | variable)
```

### arguments

---

### list: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		List
		```
**Allows Variables**: true



Accepts a variable.

---

### prompt: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### selectMultiple: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### selectAllInitially: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFChooseFromListActionSelectMultiple == `true`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFChooseFromListAction",
	"ActionKeywords": [
		"choose",
		"select",
		"list",
		"options",
		"menu",
		"multiple"
	],
	"Attribution": "Scripting",
	"Category": "Scripting",
	"CreationDate": "2014-02-05T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Presents a menu of the items passed as input to the action and outputs the user's selection."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"TypePassthrough": true,
		"Types": [
			"WFImageContentItem",
			"WFDictionaryContentItem",
			"WFContentItem"
		]
	},
	"IntentIdentifier": "sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFChooseFromListIntent",
	"LastModifiedDate": "2016-11-29T06:00:00.000Z",
	"Name": "Choose from List",
	"Output": {
		"Multiple": false,
		"OutputName": "Chosen Item",
		"Types": [
			"WFContentItem"
		]
	},
	"ParameterSummary": "Choose from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"IntentSlotName": "items",
			"Key": "WFInput",
			"Label": "List",
			"Placeholder": "List"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "",
			"Description": "The instruction provided when the list is presented.",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"IntentSlotName": "prompt",
			"Key": "WFChooseFromListActionPrompt",
			"Label": "Prompt",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, multiple items may be chosen from the list.",
			"Key": "WFChooseFromListActionSelectMultiple",
			"Label": "Select Multiple"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, all of the items in the list will start out selected when Choose from List is presented.",
			"Key": "WFChooseFromListActionSelectAll",
			"Label": "Select All Initially",
			"RequiredResources": [
				{
					"WFParameterKey": "WFChooseFromListActionSelectMultiple",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Lists",
	"UserInterfaces": [
		"WatchKit",
		"UIKit",
		"UIKitWidget",
		"Siri"
	],
	"WatchCompatible": true
}
```
