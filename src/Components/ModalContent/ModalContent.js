import styles from './ModalContent.module.scss';
import arrowDownIcon from '../../Assets/Icons/icon-arrow-down.svg';

const ModalContent = () =>{
    return(
      <ul className={styles['modal-content']}>
          <li>
                <button>
                    <p>Features</p>
                    <img src={arrowDownIcon} alt='arrow down'/>
                </button>
          </li>
          <li>
                <button>
                    <p>Company</p>
                    <img src={arrowDownIcon} alt='arrow down'/>
                </button>
          </li>
          <li className={styles['mt-3']}>
                <a href="#">Careers</a>
          </li>
          <li className={styles['mt-4']}>
                <a href="#">About</a>
          </li>
      </ul>
    )
}

export default ModalContent;