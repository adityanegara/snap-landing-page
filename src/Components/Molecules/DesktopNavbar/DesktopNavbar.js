import styles from './DesktopNavbar.module.scss';
import arrowDownIcon from '../../../Assets/Icons/icon-arrow-down.svg';
import arrowUpIcon from '../../../Assets/Icons/icon-arrow-up.svg';
import todoListIcon from '../../../Assets/Icons/icon-todo.svg';
import calendarIcon from '../../../Assets/Icons/icon-calendar.svg';
import reminderIcon from '../../../Assets/Icons/icon-reminders.svg';
import planningIcon from '../../../Assets/Icons/icon-planning.svg';
import uiStore from '../../../store';
import { useState } from 'react';
import 'animate.css';
import { CSSTransition } from 'react-transition-group';

const DesktopNavbar = () =>{
    const isFeaturesMenuOpen = uiStore(state => state.isFeaturesMenuOpen);
    const toggleFeaturesMenuOpen = uiStore(state => state.toggleFeaturesMenuOpen);
    const [featuresMenuClass, setFeaturesMenuClass] = useState("d-none");

    const isCompanyMenuOpen = uiStore(state => state.isCompanyMenuOpen);
    const toggleCompanyMenuOpen = uiStore(state => state.toggleCompanyMenuOpen);
    const [companyMenuClass , setCompanyMenuClass] = useState("d-none");

    const showFeaturesMenu = (node) =>{
        setFeaturesMenuClass("d-block");
        node.style.opacity = 0;
    }
    
    const showCompanyMenu = (node) =>{
           setCompanyMenuClass("d-block");
        node.style.opacity = 0;
    }

    const removeOpacity = (node) =>{
        node.style.opacity = 1;
    }
    
    const hideFeaturesMenu = () =>{
        setFeaturesMenuClass("d-none")
    }

    const hideCompanyMenu = () =>{
        setCompanyMenuClass("d-none");
    }
    return(
        <div className={styles['desktop-navbar']}>
            <div className={styles['desktop-navbar__title']}>
                <h1>snap</h1>
            </div>
            <div className={styles['desktop-navbar__menu']}>
                <ul className={styles['desktop-navbar__menu__list']}>
                    <li>
                        <button onClick={toggleFeaturesMenuOpen}>
                            <p>Features</p>
                            <img src={(isFeaturesMenuOpen) ? arrowDownIcon : arrowUpIcon} alt='arrow'/>
                        </button>

                        <CSSTransition in={isFeaturesMenuOpen} timeout={200} classNames={{
                            enterActive: 'animate__fadeInDown',
                            exitActive: 'animate__fadeOutUp'
                        }}
                            onEnter={showFeaturesMenu}
                            onEntered={removeOpacity}
                            onExited={hideFeaturesMenu}
                            className={`${featuresMenuClass} ${styles['desktop-navbar__sub__menu']} animate__animated`}
                            >
                            <div className={styles['desktop-navbar__sub__menu']}>
                            <ul >
                                <li>
                                    <a>
                                        <img src={todoListIcon} alt='todo list'/>
                                        <p>Todo List</p>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={calendarIcon} alt='todo list'/>
                                        <p>Calendar</p>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={reminderIcon} alt='todo list'/>
                                        <p>Reminders</p>
                                    </a>
                                </li>
                                <li>
                                <a>
                                        <img src={planningIcon} alt='todo list'/>
                                        <p>Planning</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </CSSTransition>
                    </li>
                    <li>
                        <button onClick={toggleCompanyMenuOpen}>
                            <p>Company</p>
                            <img src={(isCompanyMenuOpen) ? arrowDownIcon : arrowUpIcon} alt='arrow'/>
                        </button>
                        <CSSTransition in={isCompanyMenuOpen} timeout={200} classNames={{
                            enterActive: 'animate__fadeInDown',
                            exitActive: 'animate__fadeOutUp',
                        }}
                            onEnter={showCompanyMenu}
                            onEntered={removeOpacity}
                            onExited={hideCompanyMenu}
                            className={`${companyMenuClass} ${styles['desktop-navbar__sub__menu__company']} animate__animated`}
                        >
                            <div className={styles['desktop-navbar__sub__menu__company']}>
                            <ul >
                                <li>
                                    <a>
                                        History
                                    </a>
                                </li>
                                <li>
                                    <a>
                                       Our Team
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </CSSTransition>
                        
                    </li>
                    <li>
                        <a href='https://github.com/adityanegara'>Careers</a>
                    </li>
                    <li>
                        <a href='https://github.com/adityanegara'>About</a>
                    </li>
                </ul>
            </div>
            <div className={styles['desktop-navbar__button__groups']}>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}

export default DesktopNavbar;