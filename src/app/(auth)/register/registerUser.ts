'use server'

import myMongoose from "@/app/dbConnection";
import { z } from "zod";
import getUser from "./getUser";
import User from "./user";
import bcrypt from 'bcryptjs';

const registerSchema = z.object({
    name: z.string().min(3, "username must be atleast 3 characters."),
    password: z.string().min(6, "password must be atleast 6 characters.")
})

export default async function registerUser(prevState: {
    errors: {
        name: string[] | undefined;
        password: string[] | undefined;
    };
    message?: undefined;
} | {
    message: string;
    errors?: undefined;
} | undefined, formdata: FormData) {
    const registerFormData = Object.fromEntries(formdata);
    const {name, password} = registerFormData;
    console.log(name, password)

    const validatedData = registerSchema.safeParse(registerFormData);

    if (!validatedData.success) {
        const formFieldErrors = validatedData.error.flatten().fieldErrors;
        return {
            errors: {
                name: formFieldErrors.name,
                password: formFieldErrors.password
            }
        }
    }

    await myMongoose();
    const existingUser = await getUser(name as string);

    if (existingUser) {
        return {
            message: "User already exist"
        }
    }

    const hashedPassword = await bcrypt.hash(password as string, 10);
    console.log(hashedPassword)

    try {
        const newUser = new User({name, password: hashedPassword});
        await newUser.save();
        return {
            message: "User register successfully"
        }
    } catch (error) {
        console.log(error)
        throw new Error("register fail")
    }
}