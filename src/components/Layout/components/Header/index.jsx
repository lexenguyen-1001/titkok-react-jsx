import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import { ReactComponent as Logo } from '~/assets/svg/logo.svg';

import { ReactComponent as PlusIcon } from '~/assets/svg/plus.svg';
import { ReactComponent as EllipseIcon } from '~/assets/svg/ellipse-vertical.svg';
import { ReactComponent as LanguageIcon } from '~/assets/svg/language.svg';
import { ReactComponent as HelpIcon } from '~/assets/svg/help.svg';
import { ReactComponent as KeyboardIcon } from '~/assets/svg/keyboard.svg';
import { ReactComponent as UserIcon } from '~/assets/svg/user.svg';
import { ReactComponent as CoinIcon } from '~/assets/svg/tiktok.svg';
import { ReactComponent as AnalyticIcon } from '~/assets/svg/analytic.svg';
import { ReactComponent as SettingIcon } from '~/assets/svg/setting.svg';
import { ReactComponent as LogoutIcon } from '~/assets/svg/logout.svg';
import { ReactComponent as MessageIcon } from '~/assets/svg/message.svg';
import { ReactComponent as InboxIcon } from '~/assets/svg/inbox.svg';

import Search from '../Search';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            type: 'language',
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/feedback',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/feedback',
    },
    {
        icon: <AnalyticIcon />,
        title: 'View Analytics',
        to: '/feedback',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/feedback',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/feedback',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);

        switch (menuItem.type) {
            case 'language':
                break;

            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button to="/" className={cx('logo')}>
                    <Logo />
                </Button>
                <Search />
                <div className={cx('actions')}>
                    <Button outlined>
                        <PlusIcon /> Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Message">
                                <button className={cx('header-btn', 'message')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('header-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Log in</Button>
                    )}
                    <Menu items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('current-user')} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <EllipseIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
