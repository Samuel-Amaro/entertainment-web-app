import Navbar from '@/components/Navbar';
import './normalize.css';
import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '500'] });

export const metadata = {
	title: 'Entertainment web app',
	description:
		'entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.',
	keywords: ['Movies', 'Series', 'TV', 'entertainment'],
	icons: {
		icon: '/assets/logo.svg',
		shortcut: '/assets/logo.svg',
		apple: '/assets/logo.svg'
	},
	openGraph: {
		title: 'Entertainment web app',
		description:
			'entertainment web application, which shows the most popular movies, series and favorite television programs, allowing you to obtain information.',
		url: '/',
		type: 'website'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<div className="main-container">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
