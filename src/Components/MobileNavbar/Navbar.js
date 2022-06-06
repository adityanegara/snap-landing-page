import styles from './Navbar.module.scss'
import closedMenuIcon from '../../Assets/Icons/icon-menu.svg';
import Container from '../Container/Container';
import MobileNavbarModal from '../MobileNavbarModal/MobileNavbarModal';
import modalStore from '../../store';

const MobileNavbar = ({logo, menu}) =>{
    const toggleModalOpen = modalStore(state => state.toggleModalOpen);
    return(
        <div className={styles['navbar-mobile']}>
            <Container>
                <div className={styles['navbar-mobile__logo']}>
                    <h1>snap</h1>
                </div>
                <div className={styles['navbar-mobile__hamburger']}>
                    <button onClick={toggleModalOpen} aria-label='open navbar button'>
                        <img src={closedMenuIcon} alt='closed menu icon'/>
                    </button>
                </div>
            </Container>
            <MobileNavbarModal/>
        </div>
    )
}

export default MobileNavbar;