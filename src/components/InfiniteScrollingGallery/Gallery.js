import React from 'react';
import Image from 'components/common/Image';
import './Gallery.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePaginationGallery } from 'context/SimplePaginationContext';

export default function Gallery() {
	const { photos, requestFetch, page, query, hasMore } = usePaginationGallery();

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
