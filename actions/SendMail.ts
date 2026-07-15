

import { actionClient } from "@/lib/safe-action";
import { ContactFormSchema } from "@/schema/ContactFormSchema";


export const sendMail = actionClient
    .inputSchema(ContactFormSchema)
    .action(async ({parsedInput}) => {
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    ...parsedInput
                })
            });
            const data = await (response.json());
            if (data.success) {
                return { success: true, message: "Email sent successfully!" };
            }
            else {
                return { success: false, message: "Failed to send email." };
            }
        } catch (error) {
            return { success: false, message: "Error sending email." };
        }
    })



export default sendMail