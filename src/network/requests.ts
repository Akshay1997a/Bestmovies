import { prepareApiRequest } from "./index";
import { isNotEmpty } from "../helper/globalFunctions";
import { endPoints } from "./endPoints";
import { apiConstants } from "../helper/apiConstants";
import { actionCreators } from "../redux/actions/actionCreators";

export const getTranslateFile = (
	succesCallback: Function,
	errorCallback: Function,
) => {

	return (dispatch: Function) =>
		commonApiWrapper(
            dispatch,
			endPoints.translate,
			apiConstants.get_request_type,
			apiConstants.raw_data_type,
			null,
			null,
			null,
			(response: any, dispatch: any) => {
				if (succesCallback) {
					succesCallback(response);
				}
			},
			(err) => errorCallback(err),
		);
};

export const getProvidersList = (
	succesCallback: Function,
	errorCallback: Function,
) => {

	return (dispatch: Function) =>
		commonApiWrapper(
            dispatch,
			endPoints.providers,
			apiConstants.get_request_type,
			apiConstants.raw_data_type,
			null,
			null,
			null,
			(response: any, dispatch: any) => {
				if (succesCallback) {
					succesCallback(response);
				}
			},
			(err) => errorCallback(err),
		);
};


export const getLanguageList = (
    param:any,
	succesCallback: Function,
	errorCallback: Function,
) => {

	return (dispatch: Function) =>
		commonApiWrapper(
            dispatch,
			endPoints.languageList + `cd=${param?.cd}`,
			apiConstants.get_request_type,
			apiConstants.raw_data_type,
			null,
			null,
			null,
			(response: any, dispatch: any) => {
				if (succesCallback) {
					succesCallback(response);
				}
			},
			(err) => errorCallback(err),
		);
};


export const getLanguageData = (
	succesCallback: Function,
	errorCallback: Function,
) => {

	return (dispatch: Function) =>
		commonApiWrapper(
            dispatch,
			endPoints.languageData,
			apiConstants.get_request_type,
			apiConstants.raw_data_type,
			null,
			null,
			null,
			(response: any, dispatch: any) => {
				if (succesCallback) {
					succesCallback(response);
				}
			},
			(err) => errorCallback(err),
		);
};
export const getStaticData = (
	succesCallback: Function,
	errorCallback: Function,
) => {

	return (dispatch: Function) =>
		commonApiWrapper(
            dispatch,
			endPoints.staticData + `device=tv&slug=about`,
			apiConstants.get_request_type,
			apiConstants.raw_data_type,
			null,
			null,
			null,
			(response: any, dispatch: any) => {
				// if (succesCallback) {
					succesCallback(response);
				// }
			},
			(err) => errorCallback(err),
		);
};


const commonApiWrapper = (dispatch,
	 url: string,
	  apiRequestType: String, 
	  contentType: String, 
	  path: string, 
	  requestData: any,
	   params: any, successCallback: Function, errorCallback: Function,) => {
        showLoader(true, dispatch);
        if (isNotEmpty(path))
            url = `${url}${path}/`
        prepareApiRequest(url, apiRequestType, contentType, params, requestData,
            (response: any) => { showLoader(false, dispatch); successCallback(response, dispatch) },
            (errorMessage: any, status: any) => { handleError(errorMessage, status, errorCallback, dispatch) },
            (exception: any) => { handleException(exception, dispatch) },
        )
}

const showLoader = (shouldShow: boolean, dispatch: any) => {

    if (shouldShow) {
        dispatch(actionCreators.showLoader)
    } else {
        dispatch(actionCreators.hideLoader)
    }
}



const handleError = async (errorMessage: string, status: any, errorCallback: Function, dispatch: any) => {

    console.log("erorr frmoo apiii", errorMessage, status)
    // console.log("99Sourabh", errorMessage)
    showLoader(false, dispatch);
    if (status == 403) {
        
    }
    if (isNotEmpty(errorMessage))
        dispatch(actionCreators.errorHandler(errorMessage));
    if (errorCallback)
        errorCallback()
    if (status == 401) {
       
        // showAlertDialog('', errorMessage.error, "OK", () => {
        //     dispatch(actionCreators.handleLogout(''));
        //     clearUserData();
        // })
    }
}

const handleException = (exception: any, dispatch: any) => {
    showLoader(false, dispatch);
        dispatch(actionCreators.exceptionHandler(exception));
}