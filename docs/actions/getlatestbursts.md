
## Get Latest Bursts / GetLatestBursts (internally `is.workflow.actions.getlatestbursts`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Gets the most recent burst photos from the photo library.


### usage
```
GetLatestBursts number
```

### arguments

---

### WFGetLatestPhotoCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetLatestPhotosAction",
	"ActionKeywords": [
		"camera",
		"roll",
		"picture",
		"photo",
		"animated"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Media",
	"CreationDate": "2015-12-08T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the most recent burst photos from the photo library."
	},
	"Name": "Get Latest Bursts",
	"Output": {
		"Multiple": true,
		"OutputName": "Latest Bursts",
		"Types": [
			"PHAsset"
		]
	},
	"ParameterSummary": "Get the latest ${WFGetLatestPhotoCount}",
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetLatestPhotoCount",
			"StepperDescription": "Number of Bursts",
			"StepperNoun": "Burst",
			"StepperPluralNoun": "Bursts"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"ShortName": "Get Bursts",
	"Subcategory": "Photos",
	"WFGetLatestPhotosActionType": "Burst"
}
```
