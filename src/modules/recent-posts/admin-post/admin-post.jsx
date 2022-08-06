import fecebook from '../../../assets/img/fecebook.png'
import github from '../../../assets/img/git-hub.png'
import twitter from '../../../assets/img/twitter.png'
import injon from '../../../assets/img/injon.png'
import explore from '../../../assets/img/explore.png'
import hour from '../../../assets/img/hour.png'
import './admin-post.scss'

const AdminPost = () => {
    return(
        <div className='admin-post container'>
            <div className='admin-left'>
                <h2>What I do!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                <span>EXPLORE ME <img src={explore} alt="" /> </span>
                <img src={fecebook} alt="" />
                <img src={github} alt="" />
                <img src={twitter} alt="" />
                <img src={injon} alt="" />
            </div>
            <div className='posts'>
                <h2>Recent Posts</h2>
                <ul className='posts-items'>
                    <li className='posts-item'>
                        <span>September 24.2020</span>
                        <b>Design theory</b>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <div> <img src={hour} alt="" /> 3 minutes read</div>
                    </li>
                    <li className='posts-item'>
                        <span>September 24.2020</span>
                        <b>Design theory</b>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <div> <img src={hour} alt="" /> 3 minutes read</div>
                    </li>
                    <li className='posts-item'>
                        <span>September 24.2020</span>
                        <b>Design theory</b>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <div> <img src={hour} alt="" /> 3 minutes read</div>
                    </li>
                    <li className='posts-item'>
                        <span>September 24.2020</span>
                        <b>Design theory</b>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <div> <img src={hour} alt="" /> 3 minutes read</div>
                    </li>
                    <li className='posts-item'>
                        <span>September 24.2020</span>
                        <b>Design theory</b>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <div> <img src={hour} alt="" /> 3 minutes read</div>
                    </li>
                    <li className='posts-item'>
                        <span>September 24.2020</span>
                        <b>Design theory</b>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <div> <img src={hour} alt="" /> 3 minutes read</div>
                    </li>
                    <li className='posts-item'>
                        <span>September 24.2020</span>
                        <b>Design theory</b>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <div> <img src={hour} alt="" /> 3 minutes read</div>
                    </li>
                </ul>
                <ul className='pagination'>
                    <li className='pagination-item'>
                        <a href="#">1</a>
                    </li>
                    <li className='pagination-item'>
                        <a href="#">2</a>
                    </li>
                    <li className='pagination-item'>
                        <a href="#">3</a>
                    </li>
                    <li className='pagination-item'>
                        <a href="#">4</a>
                    </li>
                    <li className='pagination-item'>
                        <a href="#">5</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminPost