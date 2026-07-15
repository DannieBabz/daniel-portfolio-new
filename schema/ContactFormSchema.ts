import * as z from "zod";


export const ContactFormSchema = z.object({
    name: z.string().min(2, "Your name must be at least two characters long"),
    email: z.email("Please enter a valid email address"),
    subject: z.string().min(2, "Your subject must be at least two characters long").max(200),
    message: z.string().min(10, "Your message must be at least ten characters long").max(1000)
});