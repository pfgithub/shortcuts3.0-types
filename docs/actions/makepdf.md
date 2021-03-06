
## Make PDF / MakePDF (internally `is.workflow.actions.makepdf`)


## description

### summary

Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing.


### usage
```
MakePDF includeMargin=(true | false | variable) include=("All Pages" | "Single Page" | "Page Range") page=number startPage=number endPage=number input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### includeMargin: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### include: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"All Pages"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `All Pages`
- `Single Page`
- `Page Range`

---

### page: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFPDFIncludedPages == `Single Page`

		Accepts a number 
		or variable
		with a number.

---

### startPage: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFPDFIncludedPages == `Page Range`

		Accepts a number 
		or variable
		with a number.

---

### endPage: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `3`
**Allows Variables**: true

**Only enabled if**: argument WFPDFIncludedPages == `Page Range`

		Accepts a number 
		or variable
		with a number.

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMakePDFAction",
	"ActionKeywords": [
		"make",
		"generate",
		"pdf",
		"print"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing."
	},
	"IconName": "PDF.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Make PDF",
	"Output": {
		"Multiple": false,
		"OutputName": "PDF",
		"Types": [
			"WFPDFContentItem"
		]
	},
	"ParameterSummary": "Make PDF from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "WFPDFIncludeMargin",
			"Label": "Include Margin"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "All Pages",
			"Items": [
				"All Pages",
				"Single Page",
				"Page Range"
			],
			"Key": "WFPDFIncludedPages",
			"Label": "Include"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFPDFSinglePage",
			"Label": "Page #",
			"Placeholder": "1",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPDFIncludedPages",
					"WFParameterValue": "Single Page",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFPDFPageRangeStart",
			"Label": "Start Page #",
			"Placeholder": "1",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPDFIncludedPages",
					"WFParameterValue": "Page Range",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFPDFPageRangeEnd",
			"Label": "End Page #",
			"Placeholder": "3",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPDFIncludedPages",
					"WFParameterValue": "Page Range",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Printing",
	"UnsupportedEnvironments": [
		"MemoryConstrained"
	]
}
```
