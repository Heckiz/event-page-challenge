import { FC } from "react";
import { EventInfoData } from "../../../interfaces/events";
import styles from "./EventInfo.module.scss";
import ParnerBar from "./ParnerBar/ParnerBar";
const EventInfo: FC<{ data: EventInfoData }> = ({ data }) => {
  return (
    <>
      <ParnerBar parners={data.parners} />
      {data.details.map((p, index) => (
        <p key={index} className={styles.textStyle}>{p}</p>
      ))}

      <ul className={styles.participants}>
        {data.participants.map((person, index) => (
          <li key={index}>
            <h2>{person.name}</h2>
            <h4>{person.job}</h4>
          </li>
        ))}
      </ul>

      <p className={styles.textStyle}>{data.finalMessage}</p>

      <ParnerBar parners={data.parners} />
    </>
  );
};

export default EventInfo;
