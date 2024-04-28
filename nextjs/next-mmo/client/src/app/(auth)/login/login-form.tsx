'use client';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import envConfig from '@/config';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
	const { toast } = useToast();

	const form = useForm<LoginBodyType>({
		resolver: zodResolver(LoginBody),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: LoginBodyType) {
		fetch(`${envConfig.NEXT_PUBLIC_API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then(async (res) => {
				const payload = await res.json();
				const data = {
					status: res.status,
					payload,
				};
				if (!res.ok) {
					throw data;
				}
				toast({
					title: 'Login success',
					description: 'You have successfully logged in',
				});
				return data;
			})
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

				<Button type="submit" className="w-full">
					Đăng nhập
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
