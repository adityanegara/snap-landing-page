import styles from './ModalContent.module.scss';
import arrowDownIcon from '../../Assets/Icons/icon-arrow-down.svg';
import todoListIcon from '../../Assets/Icons/icon-todo.svg';
import calendarIcon from '../../Assets/Icons/icon-calendar.svg';
import reminderIcon from '../../Assets/Icons/icon-reminders.svg';
import planningIcon from '../../Assets/Icons/icon-planning.svg';

const ModalContent = () =>{
    return(
    <>
      <ul className={styles['modal-content']}>
          <li>
                <button>
                    <p>Features</p>
                    <img src={arrowDownIcon} alt='arrow down'/>
                </button>
                <ul className={styles['modal-content__sub__menu']}>
                    <li>
                        <a href='#'>
                            <img src={todoListIcon} alt='todo list' />
                            Todo List
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={calendarIcon} alt='calendar' />
                            Calendar
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={reminderIcon} alt='reminders' />
                            Reminders
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={planningIcon} alt='planning' />
                            Planning
                        </a>
                    </li>
                </ul>
          </li>
          <li>
                <button>
                    <p>Company</p>
                    <img src={arrowDownIcon} alt='arrow down'/>
                </button>
                {/* <ul className={styles['modal-content__sub__menu']}>
                    <li>
                        <a href='#'>
                            History
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Our Team
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Blog
                        </a>
                    </li>
               
                </ul> */}
          </li>
          <li className={styles['mt-3']}>
                <a href="#">Careers</a>
          </li>
          <li className={styles['mt-4']}>
                <a href="#">About</a>
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