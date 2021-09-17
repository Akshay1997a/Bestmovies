import axios from 'axios'
import { endPoints } from  './endPoints';
import { apiConstants } from '../helper/apiConstants';
import { objToFormData, logOnConsole, isNotEmpty } from '../helper/globalFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';


var qs = require('qs')

const TIMEOUT_DURATION_IN_MILLIS = 60000;

const defaultInstance = axios.create({
    baseURL: endPoints.BASE_URL,
    timeout: TIMEOUT_DURATION_IN_MILLIS,
    validateStatus: function (status) {
        return status >= 200 && status < 500;
    },
});

defaultInstance.interceptors.request.use(
    async (config: any) => {
        logOnConsole("API Request Config:", config);
        if (config.data) {
            if (config.data instanceof FormData) {
                config.headers[apiConstants.content_type_key] = apiConstants.form_data_type;
            } else {
                config.headers[apiConstants.content_type_key] = apiConstants.raw_data_type;
            }
        }
       
        let lang = i18n.language || "en"
        //  await AsyncStorage.getItem("langType")
        // alert(lang)
        config.headers.language = lang && ['en', 'es'].includes(lang) ? lang : "en"
        // let token = '';
        // let api_key = await AsyncStorage.getItem(apiConstants.api_token_key);
        // if (isNotEmpty(api_key)) {
        //     token = api_key
        // }

        // logOnConsole("token dataaaaaa",api_key,token)
        
        // if (token) {
        //     // config.headers.Authorization = 'Token token=' + token;
        //     config.headers.token = token;
        //     // 'Token token=' + token;
        // }
        config.paramsSerializer = params => {
            // Qs is already included in the Axios package
            return qs.stringify(params, {
                arrayFormat: "brackets",
                encode: true
            });
        };
        // logOnConsole("API Request Config:", config);
        return config;
    },
    
    (error: any) => {
        // Do something with request error
        logOnConsole("Request Error:", error);
        return Promise.reject(error);
    });

defaultInstance.interceptors.response.use(
    (response: any) => {
        console.log("JAII", response)
        return response
    },
    (error: any) => {
        // Do something with request error
        logOnConsole("Response Error nET:", error);
        // if (error) {
        // ShowToast(STRING_CONSTANTS.toast_danger, "Network error")
        // }
        return Promise.reject(error);
    });

const getRequestData = (data: any, contentType: String) => {
    switch (contentType) {
        case apiConstants.raw_data_type:
            return data;
        case apiConstants.multipart_data_type:
            return data
        case apiConstants.form_data_type:
            return objToFormData(data);
    }
    return data;
}

export const prepareApiRequest = (url: string, apiRequestType: String, contentType: String, params: any, body: any, successCallback: Function, errorCallback: Function, exceptionCallback: Function) => {
    requestApi(url, apiRequestType, params, getRequestData(body, contentType), successCallback, errorCallback, exceptionCallback);
}

const requestApi = (url: string, apiRequestType: String, params: any, data: any, successCallback: Function, errorCallback: Function, exceptionCallback: Function) => {
    let promise: Promise<any> = null;
    switch (apiRequestType) {
        case apiConstants.get_request_type:
            logOnConsole("GET Request")
            promise = defaultInstance.get(url, { params: data });
            break;
        case apiConstants.post_request_type:
            logOnConsole("POST Request")
            promise = defaultInstance.post(url, data);
            break;
        case apiConstants.patch_request_type:
            logOnConsole("PATCH Request")
            promise = defaultInstance.patch(url, data);
            break;
        case apiConstants.put_request_type:
            logOnConsole("PUT Request")
            promise = defaultInstance.put(url, data);
            break;
        case apiConstants.delete_request_type:
            logOnConsole("DELETE Request")
            promise = defaultInstance.delete(url, { data: data });
            break;
    }

    promise.then((response: any) => {

        console.log("reponse from api", response)
        // Success Condition
        // if (true) {
        if (response.status == 403) {
            // ShowToast("danger", response.data.error)
            errorCallback(response.data.error, response.status);
        }
        else if (response.status != 401) {
            // alert("LL")
            console.log("****************", response)
            successCallback(response.data);
        }
        // s}
        else {
            // console.log("hararam", response)
            // Error Condition
            if (errorCallback) {
                console.log("inside error cla back")
                errorCallback(response.data.error, response.status);
            }
        }
    }).catch((ex: any) => {
        // Handle Exception
        if (exceptionCallback)
            exceptionCallback(ex)
    })
}