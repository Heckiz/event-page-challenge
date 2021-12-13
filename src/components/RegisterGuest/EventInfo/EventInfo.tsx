import  { FC } from 'react'
import styles from './EventInfo.module.scss'
import ParnerBar from './ParnerBar'
const EventInfo: FC = () => {
    return (
        <>
            <ParnerBar/>
            <p className={styles.textStyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, modi totam. Aspernatur deserunt minima quidem corrupti perspiciatis quasi vel, rem totam neque fugit dicta, maxime consequuntur vitae labore, sed similique illum distinctio nesciunt sint temporibus ullam facilis culpa. Repudiandae, placeat? Deleniti fugit provident aliquam quo quas laborum beatae accusantium at.</p>
            
            <ul className={styles.participants}>
                <li>
                <h2>Jose Perez</h2>
                <h4>Lorem, ipsum dolor.</h4>
                </li>

                <li>
                <h2>Jose Perez</h2>
                <h4>Lorem, ipsum dolor.</h4>
                </li>

                <li>
                <h2>Jose Perez</h2>
                <h4>Lorem, ipsum dolor.</h4>
                </li>

                <li>
                <h2>Jose Perez</h2>
                <h4>Lorem, ipsum dolor.</h4>
                </li>
            </ul>

            <p className={styles.textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta doloremque explicabo minima aspernatur nulla nesciunt beatae exercitationem ipsam quia?</p>
      
            <ParnerBar/>

        </>
    )
}

export default EventInfo
