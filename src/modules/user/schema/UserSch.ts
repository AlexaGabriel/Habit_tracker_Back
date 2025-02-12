import z from "zod";

export const SUser = z.object({
    name: z.string().min(3, {message: "Must be 3 or more characters long"}),
    email: z.string().email({message: "invalid email adress"}),
    password: z.string().min(8, {message: "the password must be at least 8 characters long"})
})