import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ReactComponent as CheckIcon } from '~/assets/svg/check.svg';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ avatar }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={avatar} alt="hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <CheckIcon />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    avatar: PropTypes.string,
};

AccountItem.defaultProps = {
    avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1654502400&x-signature=amM2iMXwj8tVMHhDtFYwAXY7h48%3D',
};

export default AccountItem;
