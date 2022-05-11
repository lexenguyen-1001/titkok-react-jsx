import { HeaderOnly } from '~/components/Layout';

import Home from '~/page/Home';
import Upload from '~/page/Upload';
import Profile from '~/page/Profile';
import Following from '~/page/Following';

// Public routes
export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
        layout: HeaderOnly,
    },
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
];

// Private routes
export const privateRoutes = [];
