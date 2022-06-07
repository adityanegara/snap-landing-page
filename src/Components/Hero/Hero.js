import styles from './Hero.module.scss';
import heroImageMobile from '../../Assets/Images/image-hero-mobile.png';
import Container from '../Container/Container';

const Hero = () =>{
    return(
        <div className={styles['hero']}>
            <div className={styles['hero-image']}>
                <img alt='hero' src={heroImageMobile}/>
            </div>
            <div className={styles['hero-title']}>
                <h2>Make Remote Work</h2>
            </div>
            <div className={styles['hero-description']}>
                <h3>Get your team sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</h3>
            </div>
            <div className={styles['hero-cta']}>
                 <button>Learn More</button>
            </div>
            <div className={styles['hero-sponsors']}>
                Hero Sponsors
            </div>
        </div>
    )
}

export default Hero;