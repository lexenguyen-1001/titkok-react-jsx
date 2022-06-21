import routesConfig from '~/config/routes';

import { DefaultLayout, HeaderOnly } from '~/components/Layout';

import Home from '~/page/Home';
import Search from '~/page/Search';
import Following from '~/page/Following';
import Upload from '~/page/Upload';
import Profile from '~/page/Profile';

const routes = [
    {
        // Use DefaultLayout
        element: <DefaultLayout />,
        children: [
            {
                path: routesConfig.home,
                element: <Home />,
            },
            {
                path: routesConfig.search,
                element: <Search />,
            },
            {
                path: routesConfig.following,
                element: <Following />,
            },
        ],
    },
    {
        // Use HeaderOnly
        element: <HeaderOnly />,
        children: [
            {
                path: routesConfig.upload,
                element: <Upload />,
            },
        ],
    },
    {
        path: routesConfig.profile,
        element: <DefaultLayout />,
        children: [
            {
                path: '',
                element: <Profile />,
            },
        ],
    },
    {
        path: '*',
        element: <>404! Not found</>,
    },
];

export default routes;
