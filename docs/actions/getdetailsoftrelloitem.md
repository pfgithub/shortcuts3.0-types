
## Get Details of Trello Item / GetDetailsofTrelloItem (internally `is.workflow.actions.properties.trello`)

> This action requires that Shortcuts has permission to use WFTrelloAccessResource.



### usage
```
GetDetailsofTrelloItem ("")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- ``

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.fogcreek.trello",
	"Category": "Text",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFTrelloBoardContentItem",
			"WFTrelloListContentItem",
			"WFTrelloCardContentItem"
		]
	},
	"Name": "Get Details of Trello Item",
	"RequiredResources": [
		"WFTrelloAccessResource"
	],
	"WFContentItemClass": "WFTrelloItemContentItem",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
			"Items": []
		}
	]
}
```
