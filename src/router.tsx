import Home from './containers/Home';
import About from './containers/About';

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
  }
];

export default routes;
