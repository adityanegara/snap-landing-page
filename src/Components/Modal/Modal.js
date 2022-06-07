import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import modalStore from '../../store';
import Container from '../Container/Container';
import closeIcon from '../../Assets/Icons/icon-close-menu.svg'

const Modal = ({children}) =>{
  const isModalOpen = modalStore(state => state.isModalOpen);
  const toggleModalOpen = modalStore(state => state.toggleModalOpen);
  const renderModal = (isModalOpen) =>{
      if(isModalOpen){
          return(
              <div className={styles['overlay']}>
                  <div className={styles['modal']}>
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
                  </div>
              </div>
          )
      }
      return;
  }
  return ReactDOM.createPortal(
      <>
        {renderModal(isModalOpen)}
      </>
  , document.getElementById('modal'))
}

export default Modal;