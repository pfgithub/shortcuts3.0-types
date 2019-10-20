
## Get Details of Ulysses Sheet / GetDetailsofUlyssesSheet (internally `is.workflow.actions.properties.ulysses.sheet`)



### usage
```
GetDetailsofUlyssesSheet ("")
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
	"AppIdentifier": "com.soulmen.ulysses.pad",
	"Category": "Documents",
	"CreationDate": "2017-03-17T07:00:00.000Z",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFUlyssesSheetContentItem"
		]
	},
	"Name": "Get Details of Ulysses Sheet",
	"WFContentItemClass": "WFUlyssesSheetContentItem",
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
