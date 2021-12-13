import  { FC } from "react";
import styles from "./EventInfo.module.scss";

const ParnerBar: FC = () => {
  return (
      <div className={styles.parnerBar}>
                 <img src={'../../../../public/assets/parnerLogos/cluster-financiero.png'} alt="cluster-financiero"/>
                 <img src={'../../../../public/assets/parnerLogos/ebanx.png'} alt="ebanx"/>
                 <img src={'../../../../public/assets/parnerLogos/hightelecom.png'} alt="hightelecom"/>
                 <img src={'../../../../public/assets/parnerLogos/ipbf.png'} alt="ipbf" />
                 <img src={'../../../../public/assets/parnerLogos/zendesk.svg'} alt="zendesk"/>
      </div>
  );
};

export default ParnerBar;
