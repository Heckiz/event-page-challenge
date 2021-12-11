import { FC } from 'react'
import style from './styles.module.scss'
const RegisterGuest: FC = () => {
    return <>
        <header className={style.header}>
            <p className={style.category}>category</p>
            <h1 className={style.title}>title of webinar</h1>
            <h4>date </h4>
        </header>
        <section>
            <h1>register guest</h1>
        </section>
    </>
}

export default RegisterGuest
