'use client';

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	RegisterBody,
	RegisterBodyType,
} from '@/schemaValidations/auth.schema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import envConfig from '@/config';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const RegisterForm = () => {
	const form = useForm<RegisterBodyType>({
		resolver: zodResolver(RegisterBody),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: RegisterBodyType) {
		fetch(`${envConfig.NEXT_PUBLIC_API_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error('🚀 ~ onSubmit ~ error', error);
			});
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 mx-auto w-full max-w-[500px]"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tên người dùng</FormLabel>
							<FormControl>
								<Input placeholder="Tên người dùng" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email người dùng</FormLabel>
							<FormControl>
								<Input placeholder="Email người dùng" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Mật khẩu người dùng</FormLabel>
							<FormControl>
								<Input placeholder="Mật khẩu người dùng" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Xác nhận mật khẩu người dùng</FormLabel>
							<FormControl>
								<Input placeholder="Xác nhận mật khẩu người dùng" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Đăng ký
				</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
