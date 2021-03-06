import { ShortcutsResourceClass } from "./Strings/ShortcutsResourceClass";
import { ShortcutsAppIdentifier } from "./Strings/ShortcutsAppIdentifier";

export type ShortcutsParameterRelationResourceRelationSpec =
	| "=="
	| "!="
	| ">="
	| "<="
	| ">"
	| "<";

export type ShortcutsBaseResourceSpec = {
	WFResourceClass: ShortcutsResourceClass;
	RequiredResources?: ShortcutsResourceSpec[];
};

export type ShortcutsUserInteractionResourceSpec = ShortcutsBaseResourceSpec;

export type ShortcutsParameterRelationResourceSpec = ShortcutsBaseResourceSpec &
	(
		| {
				WFParameterKey: string;
				WFParameterValue: string | number | boolean | object;
				WFParameterRelation?: ShortcutsParameterRelationResourceRelationSpec;
		  }
		| {
				WFParameterKey: string;
				WFParameterValues: (string | number | boolean | object)[];
				WFParameterRelation?: ShortcutsParameterRelationResourceRelationSpec;
		  }
		| {
				WFParameterKey: string;
				WFParameterRelation?: "??";
		  });

export type ShortcutsUnavailableResourceSpec = ShortcutsBaseResourceSpec & {
	WFUnavailableResourceReason: string;
};
/*
WFDeviceAttributes: {
	WFDeviceAttributeSystemVersion: {
		WFSystemVersion: "10.3",
		WFSystemVersionRelation: ">="
	}
},
WFResourceClass: "WFDeviceAttributesResource"
*/
export type ShortcutsDeviceAttributesResourceSpec = ShortcutsBaseResourceSpec & {
	WFDeviceAttributes: {
		WFDeviceAttributeSystemVersion?: {
			WFSystemVersion: string;
			WFSystemVersionRelation?: ShortcutsParameterRelationResourceRelationSpec;
		};
		WFDeviceAttributeIdiom?: "Phone" | "Pad";
		WFDeviceAttributeCapabilities?: "Vibration"[];
	};
};

export type ShortcutsWorkflowTypeResourceSpec = ShortcutsBaseResourceSpec & {
	WFWorkflowType: "WatchKit";
};

export type ShortcutsAppInstalledResourceSpec = ShortcutsBaseResourceSpec & {
	AppIdentifier: ShortcutsAppIdentifier;
};

export type ShortcutsHealthKitAccessResourceSpec = ShortcutsBaseResourceSpec & {
	AccessType?: "Read" | "Write";
	ReadableObjectTypeIdentifierKeyPath?: string;
	ReadableType?: "Quantity" | "Category" | "Workout";
	ReadableObjectTypeIdentifierParameterKey?: string;
	Resources?: (
		| {
				AccessType: "Write";
				ReadableType: "Workout";
		  }
		| {
				AccessType: "Write";
				ReadableObjectTypeIdentifier: "Walking + Running Distance";
				ReadableType: "Quantity";
		  }
		| {
				AccessType: "Write";
				ReadableObjectTypeIdentifier: "Active Calories";
				ReadableType: "Quantity";
		  })[];
};

export type ShortcutsAccountAccessResourceSpec = ShortcutsBaseResourceSpec & {
	WFAccountClass:
		| "WFImgurAccount"
		| "WFSlackAccount"
		| "WFTodoistAccount"
		| "WFWordPressAccount"
		| "WFWunderlistAccount";
};

export type ShortcutsShortcutsWorkflowEnvironmentResourceSpec = ShortcutsBaseResourceSpec & {
	WFRelation: "!=";
	WFWorkflowEnvironment: "HomeResident";
};

export type ShortcutsLocationAccessResourceSpec = ShortcutsBaseResourceSpec;

export type ShortcutsSendEmailAccessResourceSpec = ShortcutsBaseResourceSpec;

export type ShortcutsMessagesAccessResourceSpec = ShortcutsBaseResourceSpec;

export type ShortcutsTumblrAccessResourceSpec = ShortcutsBaseResourceSpec;

export type ShortcutsRequestPaymentAccessResourceSpec = ShortcutsBaseResourceSpec;

type _rc<N extends string> = { WFResourceClass: N };

export type ShortcutsResourceSpec =
	| ShortcutsResourceClass
	| (ShortcutsUserInteractionResourceSpec & _rc<"WFUserInteractionResource">)
	| (ShortcutsParameterRelationResourceSpec &
			_rc<"WFParameterRelationResource">)
	| (ShortcutsUnavailableResourceSpec & _rc<"WFUnavailableResource">)
	| (ShortcutsDeviceAttributesResourceSpec &
			_rc<"WFDeviceAttributesResource">)
	| (ShortcutsWorkflowTypeResourceSpec & _rc<"WFWorkflowTypeResource">)
	| (ShortcutsHealthKitAccessResourceSpec & _rc<"WFHealthKitAccessResource">)
	| (ShortcutsAppInstalledResourceSpec & _rc<"WFAppInstalledResource">)
	| (ShortcutsAccountAccessResourceSpec & _rc<"WFAccountAccessResource">)
	| (ShortcutsShortcutsWorkflowEnvironmentResourceSpec &
			_rc<"WFWorkflowEnvironmentResource">)
	| (ShortcutsLocationAccessResourceSpec & _rc<"WFLocationAccessResource">)
	| (ShortcutsSendEmailAccessResourceSpec & _rc<"WFSendEmailAccessResource">)
	| (ShortcutsMessagesAccessResourceSpec & _rc<"WFMessagesAccessResource">)
	| (ShortcutsTumblrAccessResourceSpec & _rc<"WFTumblrAccessResource">)
	| (ShortcutsRequestPaymentAccessResourceSpec &
			_rc<"WFRequestPaymentAccessResource">);
