import Root from './pages/root';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import NewPassword from './pages/new-password';
import { createBrowserRouter } from 'react-router-dom';

type Route = {
  path: string;
  element: React.ReactNode;
  children?: Route[];
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
    ],
  },
] as Route[]);

export default router;