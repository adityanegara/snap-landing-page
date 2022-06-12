import styles from './DesktopNavbar.module.scss';
import arrowDownIcom from '../../../Assets/Icons/icon-arrow-down.svg';

const DesktopNavbar = () =>{
    return(
        <div className={styles['desktop-navbar']}>
            <div className={styles['desktop-navbar__title']}>
                <h1>snap</h1>
            </div>
            <div className={styles['desktop-navbar__menu']}>
                <ul>
                    <li>
                        <button>
                            <p>Features</p>
                            <img src={arrowDownIcom} alt='arrow down'/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <p>Company</p>
                            <img src={arrowDownIcom} alt='arrow down'/>
                        </button>
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