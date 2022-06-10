import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import uiStore from '../../../store';
import Container from '../Container/Container';
import closeIcon from '../../../Assets/Icons/icon-close-menu.svg'
import 'animate.css';
import { CSSTransition } from 'react-transition-group';
import Overlay from '../Overlay/Overlay';

const Modal = ({children}) =>{
  const isModalOpen = uiStore(state => state.isModalOpen);
  const toggleModalOpen = uiStore(state => state.toggleModalOpen);
      
  const renderModal = () =>{
    return(
          <Overlay>
                <div >
                   <CSSTransition  in={isModalOpen} timeout={500} classNames={{
                       enterActive: 'animate__bounceInRight',
                       exitActive: 'animate__fadeOutRight'
                   }} 
                   className={` ${styles['modal']} animate__animated`}>
                    <div className={styles['modal-content']}>
                            <Container>
                                <div className={styles['modal-close__button']}>
                                    <button onClick={toggleModalOpen} aria-label="Close Modal">
                                        <img src={closeIcon} alt="close icon"/>
                                    </button>
                                </div>
                                {children}  
                            </Container>
                        </div>
                   </CSSTransition>
                </div>
                </Overlay>
    )
  }
  return ReactDOM.createPortal(
      <>
        {renderModal()}
      </>
  , document.getElementById('modal'))
}

export default Modal;