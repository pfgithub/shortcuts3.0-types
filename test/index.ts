import test from "ava";
import {getActionFromName, WFTypes} from "../src/ActionData";
import {AsAble, IdentifierParse} from "../src/ParserData";
import {ConvertingContext} from "../src/Converter";
import { parse } from "../index";
import * as fs from "fs";
import * as path from "path";

import * as sampleshortcutdata from "./sampleshortcut.json";

function noUUID(obj: any) {
	const uuids: string[] = [];
	return JSON.parse(JSON.stringify(obj, (key, value: unknown) => {
		if(typeof value === "string") {
			if(value.match(/[a-z0-9]{6}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)) {
				let index = uuids.indexOf(value);
				if(index === -1) {
					index = uuids.push(value) - 1; // push returns array length
				}
				return `<uuid${index+1}>`;
			}
			return value.split("\uFFFC").join("[attachment]");
		}
		return value;
	}));
}

test("text field", t => {
	const cc = new ConvertingContext();
	// let text = new WFTypes.WFTextInputParameter();
	const textAction = getActionFromName("Text");
	t.truthy(textAction); // test
	if(!textAction) {return;} // typescript
	textAction.build(cc, undefined, new IdentifierParse([0, 0], [0, 0], "Data"));
	const [output] = cc.shortcut.build();
	const actions = output.WFWorkflowActions;
	t.deepEqual(noUUID(actions), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFTextActionText: "Data"
			}
		}
	]);
});

test("parsing things", t => {
	const output = parse(`text "test"`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFTextActionText: "test"
			}
		}
	]);
});

test("lists cannot be used as strings", t => {
	t.throws(() => parse(`text [list]`, {makePlist: false}));
});

test("variables", t => {
	const output = parse(`setvariable v:myvar; text v:myvar`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.setvariable",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFVariableName: "myvar"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				UUID: "<uuid2>",
				WFTextActionText: {
					WFSerializationType: "WFTextTokenString",
					Value: {
						string: "[attachment]",
						attachmentsByRange: {
							"{0, 1}": {
								Aggrandizements: [],
								Type: "Variable",
								VariableName: "myvar"
							}
						}
					}
				}
			}
		}
	]);
});

test("magic variables", t => {
	const output = parse(`text "hello" -> mv:myvar; text mv:myvar`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFTextActionText: "hello",
				CustomOutputName: "myvar"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				UUID: "<uuid2>",
				WFTextActionText: {
					WFSerializationType: "WFTextTokenString",
					Value: {
						string: "[attachment]",
						attachmentsByRange: {
							"{0, 1}": {
								Aggrandizements: [],
								Type: "ActionOutput",
								OutputName: "myvar",
								OutputUUID: "<uuid1>"
							}
						}
					}
				}
			}
		}
	]);
});

test("undefined variables throw errors", t => {
	t.throws(() => parse(`text v:undefindenamedvariable`, {makePlist: false}));
	t.throws(() => parse(`text mv:undefinedmagicvariable`, {makePlist: false}));
	t.throws(() => parse(`text s:invalidspecialvariable`, {makePlist: false}));
});

test("inputarg with actions and other action args", t => {
	const output = parse(`calculate ^(number 1) "+" (number 5)`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFNumberActionNumber: 1
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid2>",
				WFNumberActionNumber: 5
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.getvariable",
			WFWorkflowActionParameters: {
				UUID: "<uuid3>",
				WFVariable: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "Number",
						OutputUUID: "<uuid1>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.math",
			WFWorkflowActionParameters: {
				UUID: "<uuid4>",
				WFMathOperation: "+",
				WFMathOperand: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "Number",
						OutputUUID: "<uuid2>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		}
	]);
});

test("inputarg with variables without parenthesis", t => {
	const output = parse(`number 1 -> mv:mynum; calculate ^mv:mynum "+" (number 5)`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFNumberActionNumber: 1,
				CustomOutputName: "mynum"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.getvariable",
			WFWorkflowActionParameters: {
				UUID: "<uuid2>",
				WFVariable: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "mynum",
						OutputUUID: "<uuid1>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid3>",
				WFNumberActionNumber: 5
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.getvariable",
			WFWorkflowActionParameters: {
				UUID: "<uuid4>",
				WFVariable: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "get variable",
						OutputUUID: "<uuid2>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.math",
			WFWorkflowActionParameters: {
				UUID: "<uuid5>",
				WFMathOperation: "+",
				WFMathOperand: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "Number",
						OutputUUID: "<uuid3>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		}
	]);
});

test("long shortcut", t => {
	const output = parse(fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"), {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions), sampleshortcutdata);
});

// console.log(JSON.stringify(noUUID(actions), null, "\t"));