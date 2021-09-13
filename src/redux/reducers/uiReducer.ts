import { appConstants } from "../../helper/appConstants";
import { createReducer } from "../../helper/globalFunctions";
import { actionConstants } from "../../helper/actionConstants";

const initialState = {
	isLoading: false,
};

export default createReducer(initialState, {
	[actionConstants.show_loader](state: any, action: any) {
		return {
			...state,
			isLoading: action[appConstants.enable_loader],
		};
	},
});
