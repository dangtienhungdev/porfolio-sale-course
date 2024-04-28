import { z } from 'zod';

const configSchema = z.object({
	NEXT_PUBLIC_API_URL: z.string(),
});

const configProject = configSchema.safeParse({
	NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

if (!configProject.success) {
	console.error(configProject.error);
	throw new Error('Các giá trị trong file .env không hợp lệ');
}

const envConfig = configProject.data;

export default envConfig;
