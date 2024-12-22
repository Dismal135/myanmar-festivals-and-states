'use server'

import CountryState from "./countryState";
import myMongoose from "./dbConnection";

const getCountryState = async (id: string | string[] | undefined) => {
    try {
        await myMongoose()
        const state = await CountryState.findById(id)
        return state
    }catch (error) {
        console.log("fail to getCountryState", error)
    }
}

export default getCountryState;