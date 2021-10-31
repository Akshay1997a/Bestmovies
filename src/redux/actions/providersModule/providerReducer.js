import { FETCH_USER_DATA, SAVE_USER_DATA } from "./providerTypes";

const providerInitialState={
    providersData:[],
    //loading:false,
}

export const providerReducer=(state=providerInitialState,{type,payload})=>{
       switch (type) {
           case SAVE_USER_DATA :
               return{
                  ...state,
                  providersData:payload,
               };
           default:
            return state;
       }
}