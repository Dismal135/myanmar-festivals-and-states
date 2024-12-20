'use server'

import myMongoose from './dbConnection.js';
import Festival from './festival.js';

export default async function fetchUsers() {
    try {
      await myMongoose(); // Ensure MongoDB is connected
      const festivals = await Festival.find(); // Fetch all users
      return festivals;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }