import React, { useMemo } from 'react';
import { usePaginationGallery } from '../../context/SimplePaginationContext';
import PaginationItem from './PaginationItem';

const range = (val, max, limit = 5) => {
	const list = [];
	const low = val <= 1 ? 1 : val + limit > max ? max - limit : val - 1;
	const top = low + limit;

	for (let i = low; i <= top && i <= max; i++) {
		list.push(i);
	}

	return list;
};

export default function Pagination() {
	const { page, totalPages, requestFetch, query } = usePaginationGallery();
	const pagination = useMemo(() => range(page, totalPages), [page, totalPages]);
	return (
		<div className="pagination">
			<PaginationItem key={'start'} onClick={() => requestFetch(query, 1)} text="First" />
			<PaginationItem key={'Prev'} onClick={() => requestFetch(query, page - 1)} text="Prev" />
			{pagination.map((num) => (
				<PaginationItem key={num} text={num} isActive={num === page} onClick={() => requestFetch(query, num)} />
			))}
			<PaginationItem key={'Next'} onClick={() => requestFetch(query, page + 1)} text="Next" />
			<PaginationItem key={'end'} onClick={() => requestFetch(query, totalPages)} text="Last" />
		</div>
	);
}
