import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.css';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import { usePaginationGallery } from 'context/SimplePaginationContext';

export default function SearchBar() {
	const { requestFetch } = usePaginationGallery();
	const [value, setValue] = useState('');
	const clearBtnRef = useRef(null);

	const onChange = (e) => {
		const val = e.target.value;
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value) requestFetch(value, 1);
	};

	const clearInput = () => {
		setValue('');
	};

	useEffect(() => {
		if (!clearBtnRef.current) return;
		if (value) {
			clearBtnRef.current.style.visibility = 'visible';
		} else {
			clearBtnRef.current.style.visibility = 'hidden';
		}
	}, [clearBtnRef, value]);

	return (
		<form onSubmit={handleSubmit} className="searchbar">
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder={'Search...'}
				className="searchbar__input transparent"
			/>
			<button
				type="button"
				className="btn transparent searchbar__clear-btn"
				onClick={clearInput}
				ref={clearBtnRef}
			>
				<FaTimesCircle />
			</button>
			<button type="submit" className="btn transparent searchbar__submit-btn">
				<FaSearch />
			</button>
		</form>
	);
}
