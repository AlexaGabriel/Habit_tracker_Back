import z, { boolean } from "zod";

export const SUser = z.object({
    name: z.string().min(3, {message: "Must be 3 or more characters long"}),
    email: z.string().email({message: "invalid email adress"}),
    password: z.string().min(8, {message: "the password must be at least 8 characters long"})
})
export const SHab = z.object({
    title: z.string().min(3, {message: "Must be 3 or more characters long"}),
    frequency:z.boolean({message:"just True or False"}),
    catId: z.number({message:"Just numbers"}),
    ownerId: z.string({message:"userid is wrong"})
})
