import boburLogoFooter from '../../assets/img/bobur-logo-footer.png'
import './footer.scss'
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <footer>
            <div className='footer container'>
                <Link to='/'>
                    <img src={boburLogoFooter} alt="" />
                </Link>
                <div className='footer-fight'>
                    <h2>FIGHT WITH ME ON:</h2>
                    <ul className='footer-fight-item'>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Telegram</a>
                        </li>
                        <li>
                            <a href="#">You Tube</a>
                        </li>
                        <li>
                            <a href="#">Figma</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-fight'>
                    <h2>WHAT I HAVE DONE:</h2>
                    <ul className='footer-fight-item'>
                        <li>
                            <a href="#">Xalq Kutubxonasi</a>
                        </li>
                        <li>
                            <a href="#">Websitee</a>
                        </li>
                        <li>
                            <a href="#">Website</a>
                        </li>
                        <li>
                            <a href="#">Play Market</a>
                        </li>
                        <li>
                            <a href="#">App Store</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-fight'>
                    <ul className='footer-fight-item'>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Dribbble</a>
                        </li>
                        <li>
                            <a href="#">Behance</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer