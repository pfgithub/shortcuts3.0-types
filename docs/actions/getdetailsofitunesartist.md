
## Get Details of iTunes Artist / GetDetailsofiTunesArtist (internally `is.workflow.actions.properties.itunesartist`)



### usage
```
GetDetailsofiTunesArtist ("")
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
	"AppIdentifier": "com.apple.MobileStore",
	"Category": "Media",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Name": "Get Details of iTunes Artist",
	"ResidentCompatible": true,
	"WFContentItemClass": "WFiTunesArtistContentItem",
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
