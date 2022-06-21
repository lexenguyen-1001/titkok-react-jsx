import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';

import { useDebounce } from '~/hooks';

import * as searchServices from '~/services/searchServices';

import { ReactComponent as SearchIcon } from '~/assets/svg/search.svg';
import { ReactComponent as ClearIcon } from '~/assets/svg/close-fill.svg';
import { ReactComponent as LoadingIcon } from '~/assets/svg/loading-circle.svg';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [isInputFocus, setIsInputFocus] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);

    const handleClearSearch = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleFocusInput = () => {
        setIsInputFocus(true);
    };

    const handleBlurInput = () => {
        setIsInputFocus(false);
    };

    const handleInputChange = (e) => {
        const searchValue = e.target.value || '';

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        if (!debounced.trim()) {
            return setSearchResult([]);
        }

        const getDataTimeout = setTimeout(() => {
            setLoading(true);

            const fetchApi = async () => {
                setLoading(true);

                const result = await searchServices.search(debounced);
                setSearchResult(result);

                setLoading(false);
            };

            fetchApi();
        }, 500);

        return () => {
            clearTimeout(getDataTimeout);
        };
    }, [debounced]);

    return (
        <div className={cx('search', { focus: isInputFocus })}>
            <TippyHeadless
                interactive
                visible={searchResult.length > 0 && isInputFocus}
                onClickOutside={handleBlurInput}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleInputChange}
                        onFocus={handleFocusInput}
                    />
                    {searchValue && !loading && (
                        <button className={cx('clear')} type="button" onClick={handleClearSearch}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <LoadingIcon className={cx('loading')} />}
                    <span className={cx('splitter')} />
                    <button
                        className={cx('search-btn', {
                            enabled: Boolean(searchValue),
                        })}
                        type="submit"
                    >
                        <SearchIcon />
                    </button>
                </form>
            </TippyHeadless>
        </div>
    );
}

export default Search;
