import React from 'react';
import { useUnsplashContext } from '../../context/unsplashContext';
import Image from '../Image';
import './Gallery.css';
import { useGallery } from './useGallery';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Gallery() {
	const { unsplash } = useUnsplashContext();
	const { photos, requestFetch, page, query, hasMore } = useGallery(unsplash);

	const fetchMore = () => requestFetch(query, page + 1);

	return (
		<InfiniteScroll
			dataLength={photos.length}
			next={fetchMore}
			hasMore={hasMore}
			className="gallery"
			loader={<h4>Loading...</h4>}
		>
			{photos.map((photo) => (
				<Image key={photo.id} photo={photo} />
			))}
		</InfiniteScroll>
	);
}
