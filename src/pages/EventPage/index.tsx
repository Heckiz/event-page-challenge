import { FC } from "react";
import EventInfo from "../../components/EventComponents/EventInfo/EventInfo";
import Header from "../../components/EventComponents/Header/Header";
import RegisterForm from "../../components/EventComponents/GuestForm/GuestForm";
import style from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

const EventComponents: FC = () => {

  const { id } = useParams();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `./events/${id}`
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
              <EventInfo data={response?.data.eventInfoData} />
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

export default EventComponents;
