import { Link } from "react-router-dom";
import fecebook from '../../../assets/img/fecebook.png'
import github from '../../../assets/img/git-hub.png'
import twitter from '../../../assets/img/twitter.png'
import injon from '../../../assets/img/injon.png'
import explore from '../../../assets/img/explore.png'
import hour from '../../../assets/img/hour.png'
import paginationLeft from '../../../assets/img/pagination-left.png'
import paginationRight from '../../../assets/img/pagination-right.png'
import './admin-post.scss'
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";


const AdminPost = () => {


    // const {filter, setFilter, million, Id, setId, searchBody} = useau




    return(
        <>
            <Header />
            <div className='admin-post container'>
                <div className='admin-left'>
                    <h2>What I do!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                    <span>
                        <Link className="admin-left-explore" to='/'>EXPLORE ME <img src={explore} alt="" /> </Link>
                    </span>
                    <img src={fecebook} alt="" />
                    <img src={github} alt="" />
                    <img src={twitter} alt="" />
                    <img src={injon} alt="" />
                </div>
                <div className='posts'>
                    <h2>Recent Posts</h2>
                    <ul className='posts-items'>
                        <li>
                            <Link className='posts-item' to='/infarmation'>
                                <span>September 24.2020</span>
                                <b>Design theory</b>
                                <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                                <div> <img src={hour} alt="" /> 3 minutes read</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='posts-item' to='/infarmation'>
                                <span>September 24.2020</span>
                                <b>Design theory</b>
                                <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                                <div> <img src={hour} alt="" /> 3 minutes read</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='posts-item' to='/infarmation'>
                                <span>September 24.2020</span>
                                <b>Design theory</b>
                                <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                                <div> <img src={hour} alt="" /> 3 minutes read</div>
                            </Link>
                        </li>
                        <li>
                            <Link className='posts-item' to='/infarmation'>
                                <span>September 24.2020</span>
                                <b>Design theory</b>
                                <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                                <div> <img src={hour} alt="" /> 3 minutes read</div>
                            </Link>
                        </li>
                    </ul>
                    <div className='pagination'>
                        <button className='pagination-item'>
                            <img src={paginationLeft} alt="" />
                        </button>
                        <button className='pagination-item'>
                            <a href="">1</a>
                        </button>
                        <button className='pagination-item'>
                            <a href="">2</a>
                        </button>
                        <button className='pagination-item'>
                            <a href="">3</a>
                        </button>
                        <button className='pagination-item'>
                            <a href="">4</a>
                        </button>
                        <button className='pagination-item'>
                            <a href="">5</a>
                        </button>
                        <button className='pagination-item'>
                            <img src={paginationRight} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminPost