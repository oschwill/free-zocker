import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AllGames from './pages/AllGames';
// layouts
import RootLayout from './layouts/RootLayout';
import RecentlyGames from './pages/RecentlyGames';
import Details from './pages/Details';
import FetchAPI from './functions/fetchData';
import LoadingSpinner from './components/loading/LoadingSpinner';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={() => FetchAPI('relevance')} />
      <Route path="/all" element={<AllGames />} loader={() => FetchAPI('relevance')} />
      <Route path="/recently" element={<RecentlyGames />} loader={() => FetchAPI('relevance')} />
      <Route path="/details/:id" element={<Details />} loader={() => FetchAPI('relevance')} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />;
}

export default App;
