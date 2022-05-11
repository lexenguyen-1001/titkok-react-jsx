import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default HeaderOnly;
