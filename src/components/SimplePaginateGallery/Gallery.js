import React from 'react';
import { usePaginationGallery } from '../../context/SimplePaginationContext';
import Image from '../Image';

export default function Gallery() {
	const { photos } = usePaginationGallery();
	return (
		<div className="simple-gallery">
			{photos.map((photo) => (
				<Image key={photo.id} photo={photo} />
			))}
		</div>
	);
}
