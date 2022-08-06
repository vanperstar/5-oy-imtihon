import './header.scss'
import bourLogo from '../../assets/img/bobur-logo-header.png'
import search from '../../assets/img/search.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <header className="header container">
                <a href="#">
                    <img src={bourLogo} alt="bobur-logo" />
                </a>
                <ul className="header-items">
                    <li>
                        <Link className='header-item' to='/'>All</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/'>Design Theory</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/'>UX</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/'>UI</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/'>Typography</Link>
                    </li>
                </ul>
                <input type="search" name="search" placeholder='Search' />
                <button type="submit"><img src={search} alt="" /></button>
                <div class="toggle">
                    <span></span>
                </div>
            </header>
        </>
    )
}

export default Header