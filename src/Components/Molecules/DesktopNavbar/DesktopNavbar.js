import styles from './DesktopNavbar.module.scss';
import arrowDownIcom from '../../../Assets/Icons/icon-arrow-down.svg';
import todoListIcon from '../../../Assets/Icons/icon-todo.svg';
import calendarIcon from '../../../Assets/Icons/icon-calendar.svg';
import reminderIcon from '../../../Assets/Icons/icon-reminders.svg';
import planningIcon from '../../../Assets/Icons/icon-planning.svg';

const DesktopNavbar = () =>{
    return(
        <div className={styles['desktop-navbar']}>
            <div className={styles['desktop-navbar__title']}>
                <h1>snap</h1>
            </div>
            <div className={styles['desktop-navbar__menu']}>
                <ul className={styles['desktop-navbar__menu__list']}>
                    <li>
                        <button>
                            <p>Features</p>
                            <img src={arrowDownIcom} alt='arrow down'/>
                        </button>
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
                     
                    </li>
                    <li>
                        <button>
                            <p>Company</p>
                            <img src={arrowDownIcom} alt='arrow down'/>
                        </button>
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