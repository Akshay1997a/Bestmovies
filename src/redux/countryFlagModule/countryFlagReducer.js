import { SAVE_COUNTRY_FLAG_DATA } from "./countryFlagTypes";

const countryFlagInitialState={
    countryFlagData:[],
}

export const countryFlagReducer=(state=countryFlagInitialState,{type,payload})=>{
       switch (type) {
           case SAVE_COUNTRY_FLAG_DATA :
               return{
                  ...state,
                  countryFlagInitialState:payload,
               };
           default:
            return state;
       }
}