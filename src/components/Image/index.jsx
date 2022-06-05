import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import noImage from '~/assets/images/no-image.png';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback = noImage, ...rest }, ref) {
    return <img className={cx('wrapper', className)} ref={ref} src={src || fallback} alt={alt} {...rest} />;
}

export default forwardRef(Image);
