"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const profileFormSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Your Name must be at least 2 characters.",
		})
		.max(30, {
			message: "Your Name must not be longer than 30 characters.",
		}),
	surname: z
		.string()
		.min(2, {
			message: "Your Name must be at least 2 characters.",
		})
		.max(30, {
			message: "Your Name must not be longer than 30 characters.",
		}),
	email: z
		.string({
			message: "Please enter an email address.",
		})
		.email({
			message: "Please enter a valid email address.",
		}),
	website: z.string().url({ message: "Please enter a valid URL." }).optional(),
	message: z.string().max(1000).min(4),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
	message: "Dear Matthias, ",
	// website: "https://lanas.dev",
};

export function NewContactform() {
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: "onChange",
	});

	function onSubmit(data: ProfileFormValues) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="flex flex-col sm:flex-row sm:gap-4 sm:*:flex-1">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input placeholder="Matthias" {...field} />
								</FormControl>
								<FormDescription>First Name</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="surname"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Lanas" {...field} />
								</FormControl>
								<FormDescription>Last Name</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<Input placeholder="hey@lanas.dev" {...field} />
							<FormDescription>Your work Email</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="website"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Website</FormLabel>
							<Input placeholder="https://lanas.dev" {...field} />
							<FormDescription>
								Your current Website. Only input if you already have one
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea placeholder="" className="resize-y" {...field} />
							</FormControl>
							<FormDescription>
								Tell us a little bit more about the company and what issues you
								are facing with
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Get a fast Website</Button>
			</form>
		</Form>
	);
}
