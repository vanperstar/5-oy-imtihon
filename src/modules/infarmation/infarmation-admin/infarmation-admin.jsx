import './infarmation-admin.scss'
import hour from '../../../assets/img/hour.png'
import clap from '../../../assets/img/clap.png'
import share from '../../../assets/img/share.png'
// import infarmationImg from '../../../assets/img/infarmation-img.png'
import { useEffect, useState } from 'react'
import InfarmationAdminItem from './infarmation-admin-item/infarmation-admin-item'
import { useParams } from 'react-router-dom'
import { getUsers } from '../../../store/reducer/user.slice'
import { useSelector, useDispatch } from 'react-redux/es/exports'
const Base_URL = 'https://n36-blog.herokuapp.com'

const InfarmationAdmin = () => {

    let [count, setCount] = useState(125)

    const handleCount = () => {
        setCount(count += 1)
        localStorage.setItem('count', count)
    }
    
    let [sharea, setSharea] = useState(70)

    const handleSharea = () => {
        setSharea(sharea += 1)
        localStorage.setItem('sharea', sharea)
    }
    const chapak = localStorage.getItem('count', count)
    const shares = localStorage.getItem('sharea', sharea)

    const param = useParams()
    const dispatch = useDispatch()
    const [singles, setSingle] = useState([]);
    const status = useSelector(state => state.users.status) 
    const id = param.id
  
    useEffect(() => {
        if(status === 'success') {
            singlePost(id)
            dispatch(getUsers())
        }
    }, [dispatch, status])

    async function singlePost(id) {
        try {
            const res = await fetch(`${Base_URL}/posts/${id}`, {
                method: 'GET',
            });
            // if(!res.ok) {
            //     throw new Error('Server errror: ', res.status)
            // }
            const data = await res.json();
            setSingle(data)
            return data;
        } catch (error) {
            console.log(error)
        };
    }

    return (      
        <>
        <InfarmationAdminItem />
        <div className='infarmation-admin container'>
            <div className='infarmation-admin-item'>
                <div className='infarmation-admin-button'>
                    <button onClick={handleCount} type="submit">
                        <img src={clap} alt="" />
                        <div>{chapak}</div>
                    </button>
                    <button onClick={handleSharea} type="submit">
                        <img src={share} alt="" />
                        <div>{shares}</div>
                    </button>
                </div>
                <div className='infarmation-admin-post'>
                    <div className='infarmation-admin-post-item'>
                        <div>User interface</div>
                        <p>{singles.title}</p>
                        <span>October 24, 2020</span>
                        <hr />
                        <b><img src={hour} alt="" /> 3 minutes read</b>
                    </div>
                    <img src={singles.main_image_url} alt="" />
                    <div className='infarmation-admin-desc'>
                        <p>{singles.body}</p>
                        <h4>Information overload</h4>
                        <span>Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.</span>
                    </div>
                    <div className='infarmation-admin-semper'>
                        <p>
                            Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor.
                        </p>
                        <span>'Designing For Sustainability, Tim Frick, 2014'</span>
                    </div>
                    <h3>Lessons Learnt: Best Practice</h3>
                    <ul className='infarmation-admin-lesson'>
                        <li>Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</li>
                        <li>Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</li>
                    </ul>
                    <h2>More like this</h2>
                    <ul className='posts-items'>
                        <li className='posts-item'>
                            <span>September 24.2020</span>
                            <b>Design theory</b>
                            <p>How to choose the right colors when creating a website?</p>
                            <div> <img src={hour} alt="" /> 3 minutes read</div>
                        </li>
                        <li className='posts-item'>
                            <span>September 24.2020</span>
                            <b>User Interface</b>
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
                </div>
            </div>
        </div>
        </>
    )
}

export default InfarmationAdmin