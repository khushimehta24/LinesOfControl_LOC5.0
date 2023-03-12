import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Calendar from './sections/@dashboard/calendar/Calendar';
import ChatHome from './pages/ChatHome';
import SignUpPage from './pages/SignUpPage';
import Map from './pages/Map';
import MainPage from './pages/MainPage';
import Create from './pages/Create';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <MainPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'event', element: <ProductsPage /> },
        { path: 'rent', element: <BlogPage /> },
        { path: 'calendar', element: <Calendar /> },
        { path: 'chat', element: <ChatHome /> },
        { path: 'map', element: <Map /> },
        { path: 'create', element: <Create /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUpPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
