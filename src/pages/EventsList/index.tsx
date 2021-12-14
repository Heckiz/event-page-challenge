import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/RegisterGuest/Header/Header";
import { useAxios } from "../../hooks/useAxios";
import { RootObject } from "../../interfaces/events";
import styles from "./styles.module.scss";

const EventList: FC = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "./events",
  });

  return (
    <div className={styles.eventsList}>
      {loading ? (
        <span>loading</span>
      ) : error ? (
        <span>error</span>
      ) : (
        <div className={styles.scroll}>
          {response?.data.map((e: RootObject) => (
            <Link to={`/events/${e.id}`} >
            <Header data={e.headerData} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
