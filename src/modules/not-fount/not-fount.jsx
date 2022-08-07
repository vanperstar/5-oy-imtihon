import { Link } from 'react-router-dom'

import './not-fount.scss'
import notFount from '../../assets/img/404-error.png'
import Header from '../../components/header/header'


const NotFount = () => {
    return(
        <>
            <Header />
            <div className='fount container'>
                <div className='not-fount'>
                    <img src={notFount} alt="" />
                    <div>
                        <h2>Page not found - 404</h2>
                        <p>This page not found (deleted or never exists).</p>
                        <b>Try a phrase in search box or back to home and start again.</b>
                        <Link className='not-fount-link' to='/' >TAKE ME HOME!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFount