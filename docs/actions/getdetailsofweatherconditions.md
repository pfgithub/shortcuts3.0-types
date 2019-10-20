
## Get Details of Weather Conditions / GetDetailsofWeatherConditions (internally `is.workflow.actions.properties.weather.conditions`)



### usage
```
GetDetailsofWeatherConditions ("")
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
	"AppIdentifier": "com.apple.weather",
	"Category": "Location",
	"CreationDate": "2018-09-20T07:00:00.000Z",
	"IconName": "Weather.png",
	"Name": "Get Details of Weather Conditions",
	"ResidentCompatible": true,
	"Subcategory": "Weather",
	"WFContentItemClass": "WFWeatherDataContentItem",
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
