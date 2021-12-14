import { FC } from "react";
import EventInfo from "../../components/RegisterGuest/EventInfo/EventInfo";
import Header from "../../components/RegisterGuest/Header/Header";
import RegisterForm from "../../components/RegisterGuest/GuestForm/GuestForm";
import style from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

const RegisterGuest: FC = () => {
  const { id } = useParams();
  console.log(id);
  const { response, error, loading } = useAxios({
    method: "GET",
    url: `./events/${id}`,
  });
  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : error ? (
        <span>error</span>
      ) : (
        <>
          <Header data={response?.data.headerData} />

          <section className={style.content}>
            <div className={style.info}>
              <EventInfo />
            </div>
            <div className={style.form}>
              <RegisterForm />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default RegisterGuest;
