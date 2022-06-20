import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import noImage from '~/assets/images/no-image.png';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src = noImage, alt, className, fallback: customFallback, ...rest }, ref) {
    const [fallback, setFallback] = useState();

    const handleError = () => {
        setFallback(customFallback || noImage);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...rest}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
