'use client'

import { Button } from "@/components/ui/button";
import registerUser from "./registerUser";
import { useActionState } from "react";

export default function Page () {
    const [state, formAction, isPending] = useActionState(registerUser, undefined);
    return (
        <form action={formAction} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="name" />
            {state?.errors?.name && <p>{state.errors.name}</p>}
            <input type="password" name="password" placeholder="password" />
            {state?.errors?.password && <p>{state.errors.password}</p>}
            <Button disabled={isPending} type="submit">register</Button>
            {state?.message && <p>{state.message}</p>}
        </form>
    )
}