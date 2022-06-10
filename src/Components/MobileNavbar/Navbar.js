import styles from './Navbar.module.scss'
import closedMenuIcon from '../../Assets/Icons/icon-menu.svg';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import uiStore from '../../store';
import ModalContent from '../ModalContent/ModalContent';

const MobileNavbar = ({logo, menu}) =>{
    const toggleModalOpen = uiStore(state => state.toggleModalOpen);
    const handleHamburgerClicked = () =>{
        var body = document.body;
        body.classList.toggle('noscroll');
        toggleModalOpen();
    }

    return(
        <div className={styles['navbar-mobile']}>
            <Container>
                <div className={styles['navbar-mobile__logo']}>
                    <h1>snap</h1>
                </div>
                <div className={styles['navbar-mobile__hamburger']}>
                    <button onClick={handleHamburgerClicked} aria-label='open navbar button'>
                        <img src={closedMenuIcon} alt='closed menu icon'/>
                    </button>
                </div>
            </Container>
            <Modal>
                <ModalContent/>
            </Modal>
        </div>
    )
}

export default MobileNavbar;