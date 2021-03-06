
## Format Date / FormatDate (internally `is.workflow.actions.format.date`)


## description

### summary

Formats a date and time into text.


### note

Custom format strings use the format patterns from Unicode Technical Standard #35 (unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns).


### usage
```
FormatDate dateFormat=("None" | "Short" | "Medium" | "Long" | "Relative" | "RFC 2822" | "ISO 8601" | "Custom") alternateFormat=("Short" | "Medium" | "Long") timeFormat=("None" | "Short" | "Medium" | "Long" | "Relative") includeISO8601Time=(true | false | variable) formatString="string" date="string"
```

### arguments

---

### dateFormat: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Short"`
**Allows Variables**: true

**Only enabled if**: argument WFTimeFormatStyle == `None` or `Short` or `Medium` or `Long`

Accepts a string 
or variable
containing one of the options:

- `None`
- `Short`
- `Medium`
- `Long`
- `Relative`
- `RFC 2822`
- `ISO 8601`
- `Custom`

---

### alternateFormat: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Medium"`
**Allows Variables**: true

**Only enabled if**: argument WFDateFormatStyle == `Relative`

Accepts a string 
or variable
containing one of the options:

- `Short`
- `Medium`
- `Long`

---

### timeFormat: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Short"`
**Allows Variables**: true

**Only enabled if**: argument WFDateFormatStyle == `None` or `Short` or `Medium` or `Long` or `Relative`

Accepts a string 
or variable
containing one of the options:

- `None`
- `Short`
- `Medium`
- `Long`
- `Relative`

---

### includeISO8601Time: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFDateFormatStyle == `ISO 8601`

Accepts a boolean
or a variable.

---

### formatString: Date Format String [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true

**Only enabled if**: argument WFDateFormatStyle == `Custom`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### date: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Date"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFFormatDateAction",
	"ActionKeywords": [
		"date",
		"time",
		"formatter"
	],
	"Category": "Calendar",
	"Description": {
		"DescriptionNote": "Custom format strings use the format patterns from Unicode Technical Standard #35 (unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns).",
		"DescriptionSummary": "Formats a date and time into text."
	},
	"IconName": "Date.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFDate",
		"Required": true,
		"Types": [
			"WFDateContentItem"
		]
	},
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Format Date",
	"Output": {
		"Multiple": true,
		"OutputName": "Formatted Date",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Format ${WFDate}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Short",
			"Items": [
				"None",
				"Short",
				"Medium",
				"Long",
				"Relative",
				"RFC 2822",
				"ISO 8601",
				"Custom"
			],
			"Key": "WFDateFormatStyle",
			"Label": "Date Format",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTimeFormatStyle",
					"WFParameterValues": [
						"None",
						"Short",
						"Medium",
						"Long"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Medium",
			"Items": [
				"Short",
				"Medium",
				"Long"
			],
			"Key": "WFRelativeDateFormatStyle",
			"Label": "Alternate Format",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValue": "Relative",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Short",
			"Items": [
				"None",
				"Short",
				"Medium",
				"Long",
				"Relative"
			],
			"Key": "WFTimeFormatStyle",
			"Label": "Time Format",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValues": [
						"None",
						"Short",
						"Medium",
						"Long",
						"Relative"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFISO8601IncludeTime",
			"Label": "Include ISO 8601 Time",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValue": "ISO 8601",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFCustomDateFormatParameter",
			"Key": "WFDateFormat",
			"Label": "Format String",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFDate",
			"Label": "Date",
			"Placeholder": "Date"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Dates"
}
```
