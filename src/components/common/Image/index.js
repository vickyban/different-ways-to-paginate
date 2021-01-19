import React, { memo } from 'react';

const Image = memo(({ photo }) => {
	return (
		<div>
			<img
				className="gallery__img"
				alt={photo.description ?? 'gallery photo'}
				src={photo.urls.regular}
				style={{
					backgroundColor: photo.color,
				}}
			/>
		</div>
	);
});

export default Image;
