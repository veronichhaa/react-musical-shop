import ErrorPage from "../components/pages/ErrorPage";
import ProductPage from "../components/pages/ProductPage";
import HomePage from "../components/pages/HomePage";
import CatalogPage from "../components/pages/CatalogPage";

export const publicRoutes = [
    {path: '/', component: <HomePage/>, exact: true},
    {path: '/home', component: <HomePage/>, exact: true},
    {path: '/catalog', component: <CatalogPage/>, exact: true},
    {path: '/catalog/:id', component: <ProductPage/>, exact: true},
    {path: '*', component: <ErrorPage/>, exact: true},
]

