import { IconContext } from "react-icons";
import style from "./Statistics.module.css";

export const StatisticsItem = ({ title, total, icon }) => {
  return <>
    <IconContext.Provider
      value={{ color: 'green', size: '30px' }}
    > {icon}
    </IconContext.Provider>
          <span className={style.counter}>{total }</span>
          <p className={style.text}>{title}</p>
  </>
};
