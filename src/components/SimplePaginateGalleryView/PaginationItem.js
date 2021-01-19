import React from 'react';

const PaginationItem = ({ text, isActive, onClick }) => {
	return (
		<button className={isActive ? 'pagination__item active' : 'pagination__item'} onClick={onClick}>
			{text}
		</button>
	);
};
export default PaginationItem;
