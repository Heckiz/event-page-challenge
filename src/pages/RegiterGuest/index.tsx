import { FC } from 'react'
import EventInfo from '../../components/RegisterGuest/EventInfo/EventInfo'
import Header from '../../components/RegisterGuest/Header/Header'
import RegisterForm from '../../components/RegisterGuest/RegisterForm/RegisterForm'
import style from './styles.module.scss'


const RegisterGuest: FC = () => {
    return <>

        <Header/>
        
        <section className={style.content}>
            <div className={style.info}>
                <EventInfo/>
            </div>
            <div className={style.form}>
                <RegisterForm/>
            </div>
        </section>
            </>
}

export default RegisterGuest
