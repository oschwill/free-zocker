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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/all" element={<AllGames />} />
      <Route path="/recently" element={<RecentlyGames />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
