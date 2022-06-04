import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ primary, outlined, to, href, size, className, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', { primary, outlined }, size, className);

    return (
        <Comp className={cx(classes)} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    outlined: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    size: 'medium',
    className: '',
};

export default Button;
