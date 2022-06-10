import styles from './ModalContent.module.scss';
import arrowDownIcon from '../../../Assets/Icons/icon-arrow-down.svg';
import arrowUpIcon from '../../../Assets/Icons/icon-arrow-up.svg';
import todoListIcon from '../../../Assets/Icons/icon-todo.svg';
import calendarIcon from '../../../Assets/Icons/icon-calendar.svg';
import reminderIcon from '../../../Assets/Icons/icon-reminders.svg';
import planningIcon from '../../../Assets/Icons/icon-planning.svg';
import uiStore from '../../../store';
import { CSSTransition } from 'react-transition-group';
import {useState} from 'react';
import 'animate.css';

const ModalContent = () =>{
    const isFeaturesMenuOpen = uiStore(state => state.isFeaturesMenuOpen);
    const toggleFeaturesMenuOpen = uiStore(state => state.toggleFeaturesMenuOpen);
    const [featuresMenuClass, setFeaturesMenuClass] = useState("d-none");
    const isCompanyMenuOpen = uiStore(state => state.isCompanyMenuOpen);
    const toggleCompanyMenuOpen = uiStore(state => state.toggleCompanyMenuOpen);
    const [companyMenuClass , setCompanyMenuClass] = useState("d-none");

    const showFeaturesMenu = (node) =>{
        setFeaturesMenuClass("d-flex");
        node.style.opacity = 0;
    }

    
    const showCompanyMenu = (node) =>{
        setCompanyMenuClass("d-flex");
        node.style.opacity = 0;
    }
    
      const removeOpacity = (node) =>{
        node.style.opacity = 1;
      }
    
      const hideFeaturesMenu = () =>{
            setFeaturesMenuClass("d-none")
      }

      const hideCompanyMenu = () =>{
        setCompanyMenuClass("d-none")
  }
    
    const renderCompanyMenu = (isCompanyMenuOpen) =>{
        return <CSSTransition in={isCompanyMenuOpen} timeout={300} classNames={{
            enterActive: 'animate__fadeIn',
            exitActive: 'animate__fadeOut'
        }}
            onEnter={showCompanyMenu}
            onEntered={removeOpacity}
            onExited={hideCompanyMenu}
            className={`${companyMenuClass} ${styles['modal-content__sub__menu']} animate__animated`}>
                <ul className={styles['modal-content__sub__menu']}>
                    <li>
                        <a href='https://github.com/adityanegara'>
                            History
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/adityanegara'>
                            Our Team
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/adityanegara'>
                            Blog
                        </a>
                    </li>
               
                </ul>
        </CSSTransition> 
    
    }

    
    const renderFeaturesMenu = (isFeaturesMenuOpen) =>{
        return <CSSTransition in={isFeaturesMenuOpen} timeout={300} classNames={{
            enterActive: 'animate__fadeIn',
            exitActive: 'animate__fadeOut'
        }}
            onEnter={showFeaturesMenu}
            onEntered={removeOpacity}
            onExited={hideFeaturesMenu}
            className={`${featuresMenuClass} ${styles['modal-content__sub__menu']} animate__animated`}>
              <ul>
                    <li>
                        <a href='https://github.com/adityanegara'>
                            <img src={todoListIcon} alt='todo list' />
                            Todo List
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/adityanegara'>
                            <img src={calendarIcon} alt='calendar' />
                            Calendar
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/adityanegara'>
                            <img src={reminderIcon} alt='reminders' />
                            Reminders
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/adityanegara'>
                            <img src={planningIcon} alt='planning' />
                            Planning
                        </a>
                    </li>
                </ul>
        
        </CSSTransition>
    }

    return(
    <>
      <ul className={styles['modal-content']}>
          <li>
                <button onClick={toggleFeaturesMenuOpen}>
                    <p>Features</p>
                    <img src={(isFeaturesMenuOpen) ? arrowUpIcon : arrowDownIcon} alt='arrow'/>
                </button>
                {renderFeaturesMenu(isFeaturesMenuOpen)}
          </li>
          <li>
                <button onClick={toggleCompanyMenuOpen}>
                    <p>Company</p>
                    <img src={(isCompanyMenuOpen) ? arrowUpIcon : arrowDownIcon} alt='arrow'/>
                </button>
                {renderCompanyMenu(isCompanyMenuOpen)}
          </li>
          <li className={styles['mt-3']}>
                <a href="https://github.com/adityanegara">Careers</a>
          </li>
          <li className={styles['mt-4']}>
                <a href="https://github.com/adityanegara">About</a>
          </li>
      </ul>
      <div className={styles['button-group']}>
        
        <button>Login</button>
        <button>Register</button>
      </div>
    </>
    )
}

export default ModalContent;