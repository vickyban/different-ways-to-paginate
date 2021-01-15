import { useMemo, createContext, useContext } from 'react';
import { createApi } from 'unsplash-js';

const UnsplashContext = createContext();

export const UnsplashProvider = ({ accessKey, children }) => {
	const unsplash = useMemo(() => createApi({ accessKey }), [accessKey]);

	return <UnsplashContext.Provider value={{ unsplash }}>{children}</UnsplashContext.Provider>;
};

export const useUnsplashContext = () => useContext(UnsplashContext);
