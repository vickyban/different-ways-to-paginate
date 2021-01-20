import { UnsplashProvider } from 'context/UnsplashContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SimpleGallery from 'components/SimplePaginateGalleryView';
import InfiniteGallery from 'components/InfiniteScrollingGalleryView';
import NoteBoardView from 'components/NoteBoardView';

function App() {
	return (
		<UnsplashProvider accessKey={process.env.REACT_APP_UNSPLASH_KEY}>
			<Router>
				<Switch>
					<Route path="/simpleGallery">
						<SimpleGallery />
					</Route>
					<Route path="/infiniteGallery">
						<InfiniteGallery />
					</Route>
					<Route path="/noteboard">
						<NoteBoardView />
					</Route>
				</Switch>
			</Router>
		</UnsplashProvider>
	);
}

export default App;
