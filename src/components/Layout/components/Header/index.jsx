import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { ReactComponent as Logo } from '~/assets/svg/logo.svg';
import { ReactComponent as Search } from '~/assets/svg/search.svg';
import { ReactComponent as Clear } from '~/assets/svg/close-fill.svg';
import { ReactComponent as Loading } from '~/assets/svg/loading-circle.svg';
import { ReactComponent as Plus } from '~/assets/svg/plus.svg';
import { ReactComponent as Ellipse } from '~/assets/svg/ellipse-vertical.svg';
import { ReactComponent as Language } from '~/assets/svg/language.svg';
import { ReactComponent as Help } from '~/assets/svg/help.svg';
import { ReactComponent as Keyboard } from '~/assets/svg/keyboard.svg';

import useToggle from '~/hooks/useToggle';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <Language />,
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
        icon: <Help />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <Keyboard />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [isInputFocus, setIsInputFocus] = useToggle();

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClearSearch = () => {
        if (!searchValue) return;

        setSearchValue('');
    };

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);

        switch (menuItem.type) {
            case 'language':
                break;

            default:
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {}, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Logo />
                </div>

                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search', { focus: isInputFocus })}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                                value={searchValue}
                                onChange={handleSearchChange}
                                onFocus={setIsInputFocus}
                                onBlur={setIsInputFocus}
                            />
                            {searchValue && (
                                <button className={cx('clear')} type="button" onClick={handleClearSearch}>
                                    <Clear />
                                </button>
                            )}
                            <Loading className="loading" />
                            <span className={cx('splitter')} />
                            <button
                                className={cx('search-btn', {
                                    enabled: Boolean(searchValue),
                                })}
                                type="submit"
                            >
                                <Search />
                            </button>
                        </form>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button outlined>
                        <Plus /> Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <Ellipse />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
