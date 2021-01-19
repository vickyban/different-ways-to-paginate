import React from 'react';
import { PaginationGalleryProvider } from 'context/SimplePaginationContext';
import { useUnsplashContext } from 'context/UnsplashContext';
import Gallery from './Gallery';

export default function InfiniteScrollingGallery() {
	const { unsplash } = useUnsplashContext();
	return (
		<PaginationGalleryProvider apiClient={unsplash} infinteScroll>
			<Gallery />
		</PaginationGalleryProvider>
	);
}
