import { FC } from 'react'
import styles from './Footer.module.scss'
const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>©2021</p>

            <div className={styles.socialIcons}>
                 <img src={'../../../../assets/socialIcons/facebook.svg'} alt="facebook"/>
                 <img src={'../../../../assets/socialIcons/instagram.svg'} alt="instagram"/>
                 <img src={'../../../../assets/socialIcons/linkedin.svg'} alt="linkedin"/>
                 <img src={'../../../../assets/socialIcons/twitter.svg'} alt="twitter"/>
                 <img src={'../../../../assets/socialIcons/youtube.svg'} alt="youtube"/>
                 <img src={'../../../../assets/socialIcons/snapchat.svg'} alt="snapchat"/>
            </div>
        </footer>
    )
}

export default Footer
