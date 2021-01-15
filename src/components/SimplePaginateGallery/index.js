import React from 'react';
import { useUnsplashContext } from '../../context/unsplashContext';
import Gallery from './Gallery';
import './Gallery.css';
import { PaginationGalleryProvider } from '../../context/SimplePaginationContext';
import Pagination from './Pagination';

export default function PaginateGallery() {
	const { unsplash } = useUnsplashContext();

	return (
		<div className="section-center">
			<PaginationGalleryProvider apiClient={unsplash}>
				<Gallery />
				<Pagination />
			</PaginationGalleryProvider>
		</div>
	);
}
