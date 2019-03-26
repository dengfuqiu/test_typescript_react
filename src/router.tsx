import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/Login';
import Register from './containers/Register';

export interface RoutesItems {
  path: string;
  exact?: boolean;
  component: any;
}

export const routes: Array<RoutesItems> = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
];

export default routes;
