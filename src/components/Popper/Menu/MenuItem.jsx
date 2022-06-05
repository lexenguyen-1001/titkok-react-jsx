import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} to={data.to} onClick={onClick}>
            {data.icon} {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    data: {},
    onClick: () => {},
};

export default MenuItem;
