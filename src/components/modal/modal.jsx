import { useEffect, useRef, useState } from 'react'
import { setUsers } from '../../store/reducer/user.slice'
import './modal.scss'
import { useDispatch } from 'react-redux';

const Modal = () => {

    const [open, setOpen] = useState(false)

    const titleRef = useRef()
    const bodyRef = useRef()
    const selectRef = useRef()
    const dispatch = useDispatch()
    const handleAddUser = () => {
        const newPost = {
            "categoryName": selectRef.current.value,
            "title": titleRef.current.value,
            "imageUrl": "https://source.unsplash.com/352x300",
            "body": bodyRef.current.value,
        }
        dispatch(setUsers(newPost))
    }
    

    const close = (e) => {
        if(!e.target.closest('.modal-dialog') && !e.target.closest('button')){
            setOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', close )
        return () => window.removeEventListener('click', close)
    }, [])
            
    return(
        <>
        <div className="modal">
            <div>
                <form onSubmit={handleAddUser}>

                <div className="modal-dialog">
    
                    <header className="modal-header">
                        <h3>title</h3>
                        <select className='modal-select' ref={selectRef}>
                            <option value="Design Theory">Design Theory</option>
                            <option value="UX">UX</option>
                            <option value="UI">UI</option>
                            <option value="Typography">Typography</option>
                        </select>
                    </header>
                    <div className="modal-content">
                    <input ref={titleRef} type="text" placeholder='Title' />
                    <input ref={bodyRef} type="text" placeholder='Body' />
                    </div>
                    <div className="modal-button">
                        <button type='reset' onClick={setOpen.bind(null, false)}>Close</button>
                        <button type='submit'>Save</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Modal