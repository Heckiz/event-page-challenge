import { FC } from "react";
import { EventInfoData } from "../../../interfaces/events";
import styles from "./EventInfo.module.scss";
import ParnerBar from "./ParnerBar";
const EventInfo: FC<{ data: EventInfoData }> = ({ data }) => {
  console.log(data);
  return (
    <>
      <ParnerBar parners={data.parners} />
      {data.details.map((p) => (
        <p className={styles.textStyle}>{p}</p>
      ))}

      <ul className={styles.participants}>
        {data.participants.map((person) => (
          <li>
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
