import React, { useEffect, useState, useCallback, Fragment } from 'react';
import './Header.scss';

import logo from '../../assets/images/logo-2.png';

import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import Login from '../Body/Login/Login';

function Header() {

    const [isFirstPage, setIsFirstPage] = useState(true);
    const [keyWord, setKeyWord] = useState('');
    const [isOpenLogin, setIsOpenLogin] = useState(false);

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (window.scrollY === 0) {
            setIsFirstPage(true)
            // console.log(isFirstPage);
        } else if (window.scrollY > 0) {
            setIsFirstPage(false)
        }
    };


    const history = useHistory();
    // const location = useLocation();
    // const [path, setPath] = useState('')

    // useEffect(() => {
    //     setPath(location.pathname);
    // }, [location]);
    // console.log(window.location.pathname);

    const onSearch = (e) => {
        if (keyWord.trim().length != 0) {
            history.push(`/search/${keyWord}`);
        } else {
            e.preventDefault();
        }
    }

    function handleSearchClick(e) {
        onSearch(e);
        setKeyWord('');
    }

    function handleSearchEnter(e) {
        if (e.key === 'Enter') {
            onSearch(e);
            setKeyWord('');
        }
    }

    function handleOpenLogin() {
        setIsOpenLogin(true)
        console.log(isOpenLogin);
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
        return () => { window.removeEventListener("scroll", (e) => handleNavigation(e)); };
    }, [window.scrollY]);

    return (
        <Fragment>
            <div className='header' >
                <div className='header-container flex-row'
                    style={{
                        backgroundColor: isFirstPage === true ? 'transparent' : '#0f0f0f',
                        padding: isFirstPage === true ? '32px 40px' : '15px 40px',
                    }}
                >
                    <Link to='/' >
                        <div className='brand flex-row'>
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                            <p >Vetflix</p>
                        </div>
                    </Link>
                    <div className='navigation flex-row'>
                        <NavLink exact className='nav-item' to="/" activeClassName="active">Home</NavLink>
                        <NavLink className='nav-item' to="/movies" activeClassName="active">Movies</NavLink>
                        <NavLink className='nav-item' to="/tvs" activeClassName="active">TV Series</NavLink>
                        <div className='nav-item' onClick={() => handleOpenLogin()}>Login</div>
                        <div className='search-field flex-row'>
                            <input onKeyDown={(e) => { handleSearchEnter(e) }} value={keyWord} onChange={e => setKeyWord(e.target.value)} placeholder='Search...' type='text'></input>
                            <div onClick={(e) => handleSearchClick(e)}><i className='bx bx-search-alt-2 flex-row'></i></div>
                        </div>
                    </div>
                </div>
            </div >
            <Login
                isOpenLogin={isOpenLogin}
                setIsOpenLogin={setIsOpenLogin}
            />
        </Fragment>

    )
}

export default Header;