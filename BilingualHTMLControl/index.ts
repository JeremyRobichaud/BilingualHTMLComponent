import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class BilingualHTMLControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _context: ComponentFramework.Context<IInputs>;
	private _container: HTMLDivElement;

	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		this._context = context;
		this._container = container;

		let strTextToBeDisplayed = "";
		let strSpace = " ";
		if (context.userSettings.languageId == 1033) {
			// English
			if (context.parameters.EnglishTextPart1.raw != null)
				strTextToBeDisplayed = strTextToBeDisplayed + context.parameters.EnglishTextPart1.raw;
			if (context.parameters.EnglishTextPart2.raw != null)
				strTextToBeDisplayed = strTextToBeDisplayed.length > 0 ? strSpace + strTextToBeDisplayed + context.parameters.EnglishTextPart2.raw : strTextToBeDisplayed + context.parameters.EnglishTextPart2.raw;
			if (context.parameters.EnglishTextPart3.raw != null)
				strTextToBeDisplayed = strTextToBeDisplayed.length > 0 ? strSpace + strTextToBeDisplayed + context.parameters.EnglishTextPart3.raw : strTextToBeDisplayed + context.parameters.EnglishTextPart3.raw;
		} else {
			// French
			if (context.parameters.FrenchTextPart1.raw != null)
				strTextToBeDisplayed = strTextToBeDisplayed + context.parameters.FrenchTextPart1.raw;
			if (context.parameters.FrenchTextPart2.raw != null)
				strTextToBeDisplayed = strTextToBeDisplayed.length > 0 ? strSpace + strTextToBeDisplayed + context.parameters.FrenchTextPart2.raw : strTextToBeDisplayed + context.parameters.FrenchTextPart2.raw;
			if (context.parameters.FrenchTextPart3.raw != null)
				strTextToBeDisplayed = strTextToBeDisplayed.length > 0 ? strSpace + strTextToBeDisplayed + context.parameters.FrenchTextPart3.raw : strTextToBeDisplayed + context.parameters.FrenchTextPart3.raw;
		}

		let parentDiv = document.createElement("div");
		if (context.parameters.ContainerStyle.raw != null)
			parentDiv.setAttribute("style", context.parameters.ContainerStyle.raw);

		let textSpan = document.createElement("span");
		textSpan.innerHTML = strTextToBeDisplayed;

		if (context.parameters.TextStyle.raw != null)
			textSpan.setAttribute("style", context.parameters.TextStyle.raw);

		parentDiv.appendChild(textSpan);
		container.appendChild(parentDiv);
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
	}
}