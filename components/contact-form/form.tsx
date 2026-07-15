"use client"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import * as z from "zod";
import { ContactFormSchema } from '@/schema/ContactFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMail } from '@/actions/SendMail';
import { useForm } from 'react-hook-form';
import { useAction } from 'next-safe-action/hooks'
import { toast } from 'react-hot-toast';
import { Spinner } from '../ui/spinner';

const ContactForm = () => {

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
})

const { execute, isExecuting } = useAction(sendMail, {
    onSuccess:({data}) => {
        if (data.success) {
            toast.success("Email sent successfully!");
        }
    },
    onError: () => {
        toast.error("Failed to send email. Please try again later.");
    }
}
    
)

const handleSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    execute(data)
    form.reset();
}

  return (
    <>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="lg:mt-16 w-full">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 min-w-0">  
                        <Label htmlFor="name" className="uppercase text-muted my-2">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="text-white mb-4 w-full rounded-md border border-muted focus-visible:ring-2 focus-visible:ring-accent bg-primary transition"
                            {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                            <p className="text-red-500 text-xs h-4 -mt-3 mb-2">{form.formState.errors.name?.message ?? ""}</p>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">  {/* was just <div> */}
                        <Label htmlFor="email" className="uppercase text-muted my-2">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            className="text-white mb-4 w-full rounded-md border border-muted focus-visible:ring-2 focus-visible:ring-accent bg-primary transition"
                            {...form.register("email")}
                        />
                            <p className="text-red-500 text-xs h-4 -mt-3 mb-2">{form.formState.errors.email?.message ?? ""}</p>
                    </div>
                </div>

            <Label htmlFor="subject" className="uppercase text-muted my-2">Subject</Label>
            <Input 
            id="subject" 
            type="text" 
            placeholder="Project Inquiry" 
            className="text-white mb-4 rounded-md border border-muted focus-visible:ring-2 focus-visible:ring-accent bg-primary transition"
            {...form.register("subject")}
             />
                    <p className="text-red-500 text-xs h-4 -mt-3 mb-2">{form.formState.errors.subject?.message ?? ""}</p>

            <Label htmlFor="message" className="uppercase text-muted my-2">Message</Label>
            <Textarea 
            id="message" 
            placeholder="Tell me about your project..." 
            className="text-white mb-4 rounded-md h-32 w-full resize-none border border-muted focus:ring-2 focus-visible:ring-accent bg-primary transition"
            {...form.register("message")}
            >
            </Textarea>
            <p className="text-red-500 text-xs h-4 -mt-3 mb-2">{form.formState.errors.message?.message ?? ""}</p>

            <Button type="submit" className="bg-accent/90 text-black px-6 py-2 rounded-md hover:bg-accent/30 transition" disabled={isExecuting}>
                {isExecuting ? <Spinner /> : "Send Message"}
            </Button>
        </form>
    </>
  )
}

export default ContactForm