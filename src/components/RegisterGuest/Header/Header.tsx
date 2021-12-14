import { FC } from 'react'
import { HeaderData } from '../../../interfaces/events'
import style from './Header.module.scss'

const Header: FC<{data:HeaderData}> = ({data}) => {
    return (
        <div className={style.header}>
        <p className={style.category}>{data.category}</p>
        <h1 className={style.title}>{data.title}</h1>
        <h4>{data.date}</h4>
        </div>
    )
}

export default Header
