import './infarmation-admin.scss'
import hour from '../../../assets/img/hour.png'
import clap from '../../../assets/img/clap.png'
import share from '../../../assets/img/share.png'
import infarmationImg from '../../../assets/img/infarmation-img.png'
import { useState } from 'react'

const InfarmationAdmin = () => {

    let [count, setCount] = useState(125)

    const handleCount = () => {
        setCount(count += 1)
    }
    
    let [sharea, setSharea] = useState(70)

    const handleSharea = () => {
        setSharea(sharea += 1)
    }


    return (      
        <> 
        <div className='infarmation-admin container'>
            <div className='infarmation-admin-item'>
            <div className='infarmation-admin-button'>
                <button onClick={handleCount} type="submit">
                    <img src={clap} alt="" />
                    <div>{count}</div>
                </button>
                <button onClick={handleSharea} type="submit">
                    <img src={share} alt="" />
                    <div>{sharea}</div>
                </button>
            </div>
                <div className='infarmation-admin-post'>
                    <div className='infarmation-admin-post-item'>
                        <div>User interface</div>
                        <p>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                        <span>October 24, 2020</span>
                        <hr />
                        <b><img src={hour} alt="" /> 3 minutes read</b>
                    </div>
                    <img src={infarmationImg} alt="" />
                    <div className='infarmation-admin-desc'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.</p>
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