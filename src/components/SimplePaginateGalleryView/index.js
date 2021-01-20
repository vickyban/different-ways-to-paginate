import React from 'react';
import { useUnsplashContext } from 'context/UnsplashContext';
import Gallery from './Gallery';
import './index.css';
import { PaginationGalleryProvider } from 'context/SimplePaginationContext';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

export default function PaginateGallery() {
	const { unsplash } = useUnsplashContext();

	return (
		<div className="section-center">
			<PaginationGalleryProvider apiClient={unsplash}>
				<SearchBar />
				<Gallery />
				<Pagination />
			</PaginationGalleryProvider>
		</div>
	);
}
