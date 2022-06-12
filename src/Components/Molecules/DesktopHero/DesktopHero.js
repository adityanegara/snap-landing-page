import styles from './DesktopHero.module.scss';
import dataBizLogo from '../../../Assets/Icons/client-databiz.svg';
import audioPhileLogo from '../../../Assets/Icons/client-audiophile.svg';
import meetLogo from '../../../Assets/Icons/client-meet.svg';
import makerLogo from '../../../Assets/Icons/client-maker.svg';
import heroImageDesktop from '../../../Assets/Images/image-hero-desktop.png';

const DesktopHero = () =>{
    return(
        <div className={styles['desktop-hero']}>
            <div className={styles['desktop-hero__text']}>
                <div className={styles['desktop-hero__title']}>
                    <h2>Make<br/> remote work</h2>
                </div>
                <div className={styles['desktop-hero__description']}>
                    <h3>Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar.</h3>
                </div>
                <div className={styles['desktop-hero__cta']}>
                    <button>Learn more</button>
                </div>
                <div className={styles['desktop-hero__brands']}>
                    <ul>
                        <li>
                            <img src={dataBizLogo} alt={'databiz logo'}/>
                        </li>
                        <li>
                            <img src={audioPhileLogo} alt={'audioPhile logo'}/>
                        </li>
                        <li>
                            <img src={meetLogo} alt={'meet logo'}/>
                        </li>
                        <li>
                            <img src={makerLogo} alt={'maker logo'}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles['desktop-hero__image']}>
                <img src={heroImageDesktop} alt='hero image desktop'/>
            </div>

        </div>
    )
}

export default DesktopHero;