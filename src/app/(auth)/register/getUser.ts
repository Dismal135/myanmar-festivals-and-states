'use server'

import myMongoose from "@/app/dbConnection"
import User from "@/app/(auth)/register/user"

export default async function getUser(name: string) {
    try {
        await myMongoose();
        const user = await User.findOne({name});
        return user
    } catch (error) {
        console.log(error)
        throw new Error("fail to get user")
    }
} 