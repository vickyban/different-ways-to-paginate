import Gallery from 'components/SimplePaginateGallery';
import { UnsplashProvider } from 'context/UnsplashContext';

function App() {
	return (
		<UnsplashProvider accessKey={process.env.REACT_APP_UNSPLASH_KEY}>
			<Gallery />
		</UnsplashProvider>
	);
}

export default App;
