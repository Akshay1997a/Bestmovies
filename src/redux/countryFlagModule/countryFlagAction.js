import { SAVE_COUNTRY_FLAG_DATA } from "./countryFlagTypes"

export const setCountryFlag =(data)=>{
    return {
        type:SAVE_COUNTRY_FLAG_DATA,
        payload:data,
    }
}