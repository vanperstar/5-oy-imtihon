import './header.scss'
import bourLogo from '../../assets/img/bobur-logo-header.png'
import search from '../../assets/img/search.png'
import { Link, NavLink } from 'react-router-dom'
import Modal from '../modal/modal.jsx'
import { useEffect, useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)

    const [show, setShow] = useState(false)
    function toggleActive(){
        setShow(!show)
    }

    // const [head, setHead] = useState(false)
    // function toggleActive(){
    //     setHead(!head)
    // }

    return(
        <>
            <header className={`${show ? 'header header--active' : 'header container'}`}>
                <Link to='/'>
                    <img className='header-logo' src={bourLogo} alt="bobur-logo" />
                </Link>
                <ul className={`${show ? 'header-items header-items--active' : 'header-items'}`} onClick={toggleActive}>
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
                <div className={`${show ?  'toggle toggle--active' : 'toggle'}`} onClick={toggleActive}>
                    <span></span>
                </div>
            </header>
        </>
    )
}

export default Header