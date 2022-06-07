import styles from './Hero.module.scss';
import heroImageMobile from '../../Assets/Images/image-hero-mobile.png';
import Container from '../Container/Container';
import dataBizLogo from '../../Assets/Icons/client-databiz.svg';
import audioPhileLogo from '../../Assets/Icons/client-audiophile.svg';
import meetLogo from '../../Assets/Icons/client-meet.svg';
import makerLogo from '../../Assets/Icons/client-maker.svg';

const Hero = () =>{
    return(
        <div className={styles['hero']}>
            <div className={styles['hero-image']}>
                <img alt='hero' src={heroImageMobile}/>
            </div>
            <div className={styles['hero-title']}>
                <h2>Make remote work</h2>
            </div>
            <div className={styles['hero-description']}>
                <h3>Get your team sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</h3>
            </div>
            <div className={styles['hero-cta']}>
                 <button>Learn More</button>
            </div>
            <div className={styles['hero-sponsors']}>
               <ul>
                   <li>
                       <img src={dataBizLogo} alt='databiz'/>
                   </li>
                   <li>
                       <img src={audioPhileLogo} alt='audio phile'/>
                   </li>
                   <li>
                       <img src={meetLogo} alt='meet'/>
                   </li>
                   <li>
                       <img src={makerLogo} alt='maker'/>
                   </li>
               </ul>
            </div>
        </div>
    )
}

export default Hero;