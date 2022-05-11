import { DefaultLayout, HeaderOnly } from '~/components/Layout';

import Home from '~/page/Home';
import Upload from '~/page/Upload';
import Profile from '~/page/Profile';
import Following from '~/page/Following';

const routes = [
    {
        // Use DefaultLayout
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/following',
                element: <Following />,
            },
        ],
    },
    {
        // Use HeaderOnly
        element: <HeaderOnly />,
        children: [
            {
                path: '/upload',
                element: <Upload />,
            },
        ],
    },
    {
        path: '/profile',
        element: <Profile />,
    },
];

export default routes;
