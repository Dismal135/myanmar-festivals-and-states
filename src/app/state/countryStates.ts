'use server'

import myMongoose from '../dbConnection.js';
import CountryState from './countryState.js';

export default async function fetchCountryStates() {
    try {
      await myMongoose(); // Ensure MongoDB is connected
      const countryStates = await CountryState.find(); // Fetch all users
      return countryStates;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }