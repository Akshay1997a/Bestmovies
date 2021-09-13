import { actionConstants } from "../../helper/actionConstants";
import { appConstants } from "../../helper/appConstants";

export const actionCreators = {

	showLoader: {
		[actionConstants.action_type]: actionConstants.show_loader,
		[appConstants.enable_loader]: true,
	},
	
	hideLoader: {
		[actionConstants.action_type]: actionConstants.show_loader,
		[appConstants.enable_loader]: false,
	},

	errorHandler: function (errorMessage: string) {
		return {
			[actionConstants.action_type]: actionConstants.error_handler,
			[appConstants.error_message]: errorMessage,
		};
	},
	exceptionHandler: function (exception: any) {
		return {
			[actionConstants.action_type]: actionConstants.error_handler,
			[appConstants.exception_object]: exception,
		};
	},
};
