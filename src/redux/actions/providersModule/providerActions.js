import { FETCH_USER_DATA, SAVE_USER_DATA } from "./providerTypes"

export const setProviders =(data)=>{
      return {
          type:SAVE_USER_DATA,
          payload:data,
      }
}