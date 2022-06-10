import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import uiStore from '../../store';
import Container from '../Container/Container';
import closeIcon from '../../Assets/Icons/icon-close-menu.svg'
import 'animate.css';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const Modal = ({children}) =>{
  const isModalOpen = uiStore(state => state.isModalOpen);
  const [modalClasses, setModalClasses] = useState("d-none");
  const toggleModalOpen = uiStore(state => state.toggleModalOpen);
  
  const showModal = (node) =>{
    setModalClasses("d-block");
    node.style.opacity = 0;
  }

  const removeOpacity = (node) =>{
    node.style.opacity = 1;
  }

  const hideModal = () =>{
        setModalClasses("d-none")
  }
    
  const renderModal = () =>{
    return(
        <CSSTransition  in={isModalOpen} timeout={500} classNames={{
            enterActive: 'animate__fadeIn',
            exitActive: 'animate__fadeOut'
        }}
            onEnter={showModal}
            onEntered={removeOpacity}
            onExited={hideModal}
            className={`${modalClasses} ${styles['overlay']} animate__animated`}>
                <div className={styles['overlay']}>
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
        </CSSTransition>
    )
  }
  return ReactDOM.createPortal(
      <>
        {renderModal()}
      </>
  , document.getElementById('modal'))
}

export default Modal;