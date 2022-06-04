import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button to={data.to} className={cx('menu-item')}>
            {data.icon} {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
};

MenuItem.defaultProps = {
    data: {},
};

export default MenuItem;
