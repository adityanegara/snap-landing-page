import ReactDOM from 'react-dom';
import styles from './Overlay.module.scss';
import uiStore from '../../../store';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const Overlay = ({children}) =>{
   const isModalOpen = uiStore(state => state.isModalOpen);
   const [overlayClasses, setOverlayClasses] = useState("d-none");

   const showOverlay = (node) =>{
    setOverlayClasses("d-block");
    node.style.opacity = 0;
    }

    const removeOpacity = (node) =>{
    node.style.opacity = 1;
    }

  const hideOverlay = () =>{
    setOverlayClasses("d-none")
  }

  return(
    <CSSTransition in={isModalOpen} timeout={500} classNames={{
        enterActive: 'animate__fadeIn',
        exitActive: 'animate__fadeOut'
    }}
        onEnter={showOverlay}
        onEntered={removeOpacity}
        onExited={hideOverlay}
        className={`${overlayClasses} ${styles['overlay']} animate__animated`}>
            {children}
    </CSSTransition>
  )
}

export default Overlay;