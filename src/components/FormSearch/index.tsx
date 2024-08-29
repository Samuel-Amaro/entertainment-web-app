'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Search.module.css';
import { useRouter } from 'next/navigation';
import { TypeSearchFor } from '@/types';

export default function FormSearch({
	placeholder,
	searchFor = 'multi'
}: {
	placeholder: string;
	searchFor: TypeSearchFor;
}) {
	const [searchText, setSearchText] = useState('');
	const router = useRouter();

	function handleSubmitFormSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const encodeSearchText = encodeURI(searchText);
		router.push(`/search/${searchFor}?query=${encodeSearchText}&page=${1}`);
	}

	function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
		setSearchText(event.target.value);
	}

	return (
		<form onSubmit={handleSubmitFormSearch} className={styles.form}>
			<div className={styles.group}>
				{/*eslint-disable-next-line @next/next/no-img-element*/}
				<img
					src="/assets/icon-search.svg"
					alt="Icon search"
					width={32}
					height={32}
					className={styles.icon}
				/>
				<input
					type="search"
					placeholder={placeholder}
					title="Search for movies or TV series"
					name="search"
					aria-label={placeholder}
					className={styles.input}
					onChange={handleChangeInput}
					value={searchText}
				/>
			</div>
			<button type="submit" title="Submit Search" aria-label="Search" className={styles.btn}>
				Search
			</button>
		</form>
	);
}
