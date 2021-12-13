import { FC } from 'react'
import styles from './Footer.module.scss'
const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>©2021</p>

            <div className={styles.socialIcons}>
                 <img src={'../../../../public/assets/socialIcons/facebook.svg'} alt="facebook"/>
                 <img src={'../../../../public/assets/socialIcons/instagram.svg'} alt="instagram"/>
                 <img src={'../../../../public/assets/socialIcons/linkedin.svg'} alt="linkedin"/>
                 <img src={'../../../../public/assets/socialIcons/twitter.svg'} alt="twitter"/>
                 <img src={'../../../../public/assets/socialIcons/youtube.svg'} alt="youtube"/>
                 <img src={'../../../../public/assets/socialIcons/snapchat.svg'} alt="snapchat"/>
            </div>
        </footer>
    )
}

export default Footer
