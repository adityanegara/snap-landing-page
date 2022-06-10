import styles from './Button.module.scss';

const Button = ({text, onClick, isAlternate}) =>{
    const renderStyles = (isAlternate) =>{
        return (isAlternate) ? styles['button-alternate'] : styles['button']
    }

    return(
        <button onClick={onClick} className={renderStyles(isAlternate)}>
            {text}
        </button>
    )   
}

export default Button;