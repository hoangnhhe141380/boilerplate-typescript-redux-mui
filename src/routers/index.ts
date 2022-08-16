//Config
import routes from '../config/routes';

//Pages
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';
import Type from '../pages/Type';
import PageNotFound from '../pages/PageNotFound';

interface RoutesItemProps {
    path: string
    component: () => JSX.Element
}

type RoutesProps = RoutesItemProps[]

const publicRoutes: RoutesProps = [
    { path: routes.home, component: Home },
    { path: routes.type, component: Type },
    { path: routes.pokemon, component: PokemonDetail },
    { path: routes[404], component: PageNotFound },
];

const privateRoutes: RoutesProps = []

export { publicRoutes, privateRoutes }