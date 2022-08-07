import './header.scss'
import bourLogo from '../../assets/img/bobur-logo-header.png'
import search from '../../assets/img/search.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <header className="header container">
                <Link to='/'>
                    <img src={bourLogo} alt="bobur-logo" />
                </Link>
                <ul className="header-items">
                    <li>
                        <Link className='header-item' to='/all'>All</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/designthory'>Design Theory</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/ux'>UX</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/ui'>UI</Link>
                    </li>
                    <li>
                        <Link className='header-item' to='/typography'>Typography</Link>
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