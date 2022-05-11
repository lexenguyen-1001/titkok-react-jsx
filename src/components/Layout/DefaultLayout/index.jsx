import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/components/Sidebar';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
