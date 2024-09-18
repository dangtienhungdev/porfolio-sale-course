'use client';

import { createContext, useContext, useState } from 'react';

export const AppContext = createContext({
	sessionToken: '',
	setSessionToken: (sessionToken: string) => {},
});

export default function AppProvider({
	children,
	initialSessionToken = '',
}: Readonly<{ children: React.ReactNode; initialSessionToken?: string }>) {
	const [sessionToken, setSessionToken] = useState<string>(initialSessionToken);

	return (
		<AppContext.Provider value={{ sessionToken, setSessionToken }}>
			{children}
		</AppContext.Provider>
	);
}

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within an AppProvider');
	}

	return context;
};
