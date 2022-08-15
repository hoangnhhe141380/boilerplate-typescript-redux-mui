//Config
import routes from '../config/routes';

//Pages
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';
import PageNotFound from '../pages/PageNotFound';

interface RoutesItemProps {
    path: string
    component: () => JSX.Element
}

type RoutesProps = RoutesItemProps[]

const publicRoutes: RoutesProps = [
    { path: routes.home, component: Home },
    { path: routes.movie, component: MovieDetail },
    { path: routes[404], component: PageNotFound },
];

const privateRoutes: RoutesProps = []

export { publicRoutes, privateRoutes }