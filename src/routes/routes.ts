import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
type JSXElement = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    name: string;
    // Component: () => JSX.Element;
    Component: LazyExoticComponent<JSXElement> | JSXElement;
}

// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    // {
    //     to: '/lazy1',
    //     path: 'lazy1',
    //     Component: Lazy1,
    //     name: 'LazyPage1'
    // },
    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     Component: Lazy2,
    //     name: 'LazyPage2'
    // },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     Component: Lazy3,
    //     name: 'LazyPage3'
    // },
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'Lazy-2'
    },
]