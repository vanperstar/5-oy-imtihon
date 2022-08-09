import { useEffect } from 'react'
import './modal.scss'

const Modal = ({title = 'Title', setOpen}) => {

    

    const close = (e) => {
        if(!e.target.closest('.modal-dialog') && !e.target.closest('button')){
            setOpen(false)
        }
        console.log('window bosildi !!!')
    }

    useEffect(() => {
        window.addEventListener('click', close )
        return () => window.removeEventListener('click', close)
    }, [])
            
    return(
        <div className="modal">
            <div>
                <div className="modal-dialog">
                    <header className="modal-header">
                        <h3>{title}</h3>
                    </header>
                    <div className="modal-content">
                    <input type="text" placeholder='Title' />
                    <input type="text" placeholder='Body' />
                    </div>
                    <div className="modal-button">
                        <button onClick={setOpen.bind(null, false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal