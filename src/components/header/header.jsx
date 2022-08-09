import './header.scss'
import bourLogo from '../../assets/img/bobur-logo-header.png'
import search from '../../assets/img/search.png'
import { Link, NavLink } from 'react-router-dom'
import Modal from '../modal/modal.jsx'
import { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)
    return(
        <>
            <header className="header container">
                <Link to='/'>
                    <img src={bourLogo} alt="bobur-logo" />
                </Link>
                <ul className="header-items">
                    <li>
                        <Link className='header-item' to='/notfount'>All</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/notfount'>Design Theory</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/notfount'>UX</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/notfount'>UI</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/notfount'>Typography</Link>
                    </li>
                </ul>
                <div className='modal'>
                    {open && (
                        <Modal
                        setOpen={setOpen} 
                        />
                        )}
                </div>
                <button className='modal-open' title='Add-post' onClick={setOpen.bind(null, true)}>Modal</button>
                <input type="search" name="search" placeholder='Search' />
                <button className='search-btn' type="submit"><img src={search} alt="" /></button>
                <div class="toggle">
                    <span></span>
                </div>
            </header>
        </>
    )
}

export default Header