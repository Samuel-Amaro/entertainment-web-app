'use client';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { StrictMode, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

type MenuItem = {
	label: string;
	url: Url;
	hrefText: string;
};

type PropsMenuButton = {
	labelButton: string;
	children: React.ReactNode;
	menuItems: MenuItem[];
	classNameMenuButton?: string;
};

export default function MenuButton({
	labelButton,
	children,
	menuItems,
	classNameMenuButton
}: PropsMenuButton) {
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const itemsRef = useRef<HTMLAnchorElement[] | null>(null);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('click', handleClickOutsideWindow);
		}

		return () => {
			window.removeEventListener('click', handleClickOutsideWindow);
		};
	}, [isOpen]);

	function handleClickOutsideWindow(ev: MouseEvent) {
		if (!containerRef.current?.contains(ev.target as Node)) {
			setIsOpen(false);
		}
	}

	function getItemsRef() {
		if (!itemsRef.current) {
			itemsRef.current = [];
		}
		return itemsRef.current;
	}

	function handleKeydownButton(event: React.KeyboardEvent<HTMLButtonElement>) {
		if (event.key === 'Tab' && !event.shiftKey) {
			setIsOpen(true);
		} else if (event.key === 'Esc' || event.key === 'Escape') {
			setIsOpen(false);
			buttonRef.current?.focus();
		} else if (event.key === 'Enter' || event.key === ' ') {
			setIsOpen(true);
		}
	}

	function handleKeydownOption(event: React.KeyboardEvent<HTMLAnchorElement>, index: number) {
		if (event.key === 'Esc' || event.key === 'Escape') {
			setIsOpen(false);
			buttonRef.current?.focus();
		}
		if (index === getItemsRef().length - 1) {
			setIsOpen(false);
		}
	}

	return (
		<StrictMode>
			<div className={styles.container} ref={containerRef}>
				<button
					ref={buttonRef}
					type="button"
					id="menubutton"
					aria-haspopup="true"
					aria-controls="menu2"
					aria-label={labelButton}
					title={labelButton}
					aria-expanded={isOpen}
					onKeyDown={handleKeydownButton}
					className={
						classNameMenuButton ? `${styles.menuButton} ${classNameMenuButton}` : styles.menuButton
					}
				>
					{children}
				</button>
				<ul
					id="menu2"
					role="menu"
					aria-labelledby="menubutton"
					className={isOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}
				>
					{menuItems.map((item, index) => (
						<li key={index} role="none" className={styles.item}>
							<Link
								href={item.url}
								rel="next"
								role="menuitem"
								title={item.label}
								ref={(node) => {
									const items = getItemsRef();
									if (node) {
										items[index] = node;
									} else {
										items.splice(index, 1);
									}
								}}
								onKeyDown={(event) => handleKeydownOption(event, index)}
								className={styles.link}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</StrictMode>
	);
}
