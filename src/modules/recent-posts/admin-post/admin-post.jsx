import { Link } from "react-router-dom";
import fecebook from '../../../assets/img/fecebook.png'
import github from '../../../assets/img/git-hub.png'
import twitter from '../../../assets/img/twitter.png'
import injon from '../../../assets/img/injon.png'
import explore from '../../../assets/img/explore.png'
import paginationLeft from '../../../assets/img/pagination-left.png'
import paginationRight from '../../../assets/img/pagination-right.png'
import './admin-post.scss'
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { ListItem } from "../admin-post-item/admin-post-item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, getUsers } from "../../../store/reducer/user.slice";


const AdminPost = () => {
    const users = useSelector(state => state.users.users) 
    const status = useSelector(state => state.users.status) 
    const dispatch = useDispatch()
    console.log(users);
    const handleDeleteUser = (e) => {
        if(e.target.matches('button[data-id')) {
            const id = e.target.dataset.id
            dispatch(deleteUser(id))
        }
    }
    
    useEffect(() => {
        if(status === 'idle') {
            dispatch(getUsers())
        }
    }, [dispatch, status])

    return(
        <>
            <Header />
            <div className='admin-post container'>
                <div className='admin-left'>
                    <h2>What I do!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                    <span>
                        <Link className="admin-left-explore" to='/notfount'>EXPLORE ME <img src={explore} alt="" /> </Link>
                    </span>
                    <img src={fecebook} alt="" />
                    <img src={github} alt="" />
                    <img src={twitter} alt="" />
                    <img src={injon} alt="" />
                </div>
                <div className='posts'>
                    <h2>Recent Posts</h2>
                    <ul className='posts-items' onClick={handleDeleteUser}>
                    {
                        users.posts?.map((item) => <ListItem key={item.id} title={item.title} id={item.id} created_time={item.created_time} category_name={item.category_name}/>)
                    }
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