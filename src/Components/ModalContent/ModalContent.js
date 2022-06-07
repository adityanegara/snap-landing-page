import styles from './ModalContent.module.scss';
import arrowDownIcon from '../../Assets/Icons/icon-arrow-down.svg';

const ModalContent = () =>{
    return(
        <ul className={styles['modal-nav']}>
        <li>
            <button>
                <p>Features</p>
                <img src={arrowDownIcon}/>
            </button>
        </li>
        <li>
            <button>
                <p>Company</p>
                <img src={arrowDownIcon}/>
            </button>
        </li>
        <li className={styles['mt-3']}>
            <a>Careers</a>
        </li>
        <li className={styles['mt-4']}>
            <a>About</a>
        </li>
    </ul>
    )
}

export default ModalContent;