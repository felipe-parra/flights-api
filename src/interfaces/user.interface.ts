import z from "zod";

const registerFormSchema = z.object({
	email: z.string().email(),
	user_id: z.string().optional(),
	name: z.string().optional(),
});

export const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;

export type UserType = z.infer<typeof registerFormSchema>;
