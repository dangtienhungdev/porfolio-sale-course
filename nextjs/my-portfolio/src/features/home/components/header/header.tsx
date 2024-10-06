'use client';

import { Globe, Menu, Moon, Sun, X } from 'lucide-react';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
	const { setTheme, resolvedTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const [currentLanguage, setCurrentLanguage] = useState('EN');
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark');
	};

	const toggleLanguage = () => {
		setCurrentLanguage(currentLanguage === 'EN' ? 'ES' : 'EN');
		// Here you would typically trigger a language change in your i18n setup
	};

	return (
		<header className="bg-white dark:bg-gray-800 shadow-md z-10">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link
					href="/"
					className="text-2xl font-bold text-blue-600 dark:text-blue-400"
				>
					CodeMaster
				</Link>

				{/* Desktop Buttons */}
				<div className="hidden md:flex items-center space-x-4">
					<button
						onClick={toggleDarkMode}
						className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
						aria-label="Toggle dark mode"
					>
						{isDarkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</button>
					<button
						onClick={toggleLanguage}
						className="flex items-center space-x-2 px-3 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
						aria-label="Change language"
					>
						<Globe className="h-5 w-5" />
						<span className="font-medium">{currentLanguage}</span>
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
				<nav className="px-4 pt-2 pb-4 space-y-2">
					<div className="flex items-center space-x-4 pt-2">
						<button
							onClick={toggleDarkMode}
							className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
							aria-label="Toggle dark mode"
						>
							{isDarkMode ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</button>
						<button
							onClick={toggleLanguage}
							className="flex items-center space-x-2 px-3 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
							aria-label="Change language"
						>
							<Globe className="h-5 w-5" />
							<span className="font-medium">{currentLanguage}</span>
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
