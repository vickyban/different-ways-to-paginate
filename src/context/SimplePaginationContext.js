import { useEffect, useReducer, useCallback, useContext, createContext } from 'react';

const EventTypes = {
	REQUEST_FETCH: 'fetch',
	RESOLVED_FETCH: 'resolved',
};

const Status = {
	IDLE: 'idle',
	LOADING: 'loading',
	ERROR: 'error',
	UNDEFINED: undefined,
};

const initState = {
	photos: [],
	total: 0,
	totalPages: 0,
	page: 0,
	query: '',
	limit: 20,
	status: Status.UNDEFINED,
};

const galleryReducer = (state, event) => {
	const { type, data } = event;
	switch (type) {
		case EventTypes.REQUEST_FETCH:
			return {
				...state,
				query: data.query || state.query,
				page: data.page,
				status: Status.LOADING,
				limit: data.limit || state.limit,
			};
		case EventTypes.RESOLVED_FETCH:
			return {
				...state,
				total: data.total,
				totalPages: data.total_pages,
				photos: data.results,
				status: Status.IDLE,
			};
		default:
			return state;
	}
};

const infiniteGalleryReducer = (state, event) => {
	const { type, data } = event;
	switch (type) {
		case EventTypes.REQUEST_FETCH:
			return {
				...state,
				query: data.query || state.query,
				page: data.page,
				status: Status.LOADING,
				limit: data.limit || state.limit,
			};
		case EventTypes.RESOLVED_FETCH:
			return {
				...state,
				total: data.total,
				totalPages: data.total_pages,
				photos: [...state.photos, ...data.results],
				status: Status.IDLE,
			};
		default:
			return state;
	}
};

export const useGallery = (api, infinteScroll = false) => {
	const [state, dispatch] = useReducer(infinteScroll ? infiniteGalleryReducer : galleryReducer, initState);
	const { status, query, page, limit, totalPages } = state;

	const requestFetch = useCallback(
		(query, page, limit) => {
			dispatch({
				type: EventTypes.REQUEST_FETCH,
				data: { query, page, limit },
			});
		},
		[dispatch]
	);

	useEffect(() => {
		requestFetch('cat', 1);
	}, []);

	useEffect(() => {
		if (status !== Status.LOADING) return;
		api?.search
			.getPhotos({
				query,
				page,
				perPage: limit,
			})
			.then((result) => {
				if (result.errors) {
					console.log('error occurred: ', result.errors[0]);
				} else {
					const response = result.response;
					dispatch({
						type: EventTypes.RESOLVED_FETCH,
						data: response,
					});
				}
			})
			.catch((e) => console.log(e));
	}, [api, status]);

	return {
		...state,
		requestFetch,
		hasMore: status === Status.UNDEFINED || page < totalPages,
	};
};

const PaginationGalleryContext = createContext();

export const PaginationGalleryProvider = ({ children, apiClient, infinteScroll }) => {
	const gallery = useGallery(apiClient, infinteScroll);

	return <PaginationGalleryContext.Provider value={gallery}>{children}</PaginationGalleryContext.Provider>;
};

export const usePaginationGallery = () => useContext(PaginationGalleryContext);
