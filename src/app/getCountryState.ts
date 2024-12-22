'use server'

import CountryState from "./countryState";
import myMongoose from "./dbConnection";

const getCountryState = async (id: any) => {
    try {
        await myMongoose()
        const state = await CountryState.findById(id)
        return state
    }catch (error) {
        console.log("fail to getCountryState")
        throw new Error
    }
}

export default getCountryState;