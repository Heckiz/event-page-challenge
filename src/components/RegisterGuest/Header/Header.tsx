import { FC } from 'react'
import style from './styles.module.scss'

const Header: FC = () => {
    return (
        <header className={style.header}>
        <p className={style.category}>category</p>
        <h1 className={style.title}>title of webinar</h1>
        <h4>date </h4>
        </header>
    )
}

export default Header
