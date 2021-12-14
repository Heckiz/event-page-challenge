import { FC } from "react";
import styles from "./EventInfo.module.scss";

const ParnerBar: FC<{ parners: string[] }> = ({ parners }) => {
  return (
    <div className={styles.parnerBar}>
      {parners.map((parner) => (
        <img
          src={`../../../../assets/parnerLogos/${parner}.png`}
          alt={`${parner}`}
        />
      ))}
    </div>
  );
};

export default ParnerBar;
