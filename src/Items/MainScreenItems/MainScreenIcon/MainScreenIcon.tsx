import { MainScreenIconProps } from "./MainScreenIconType";
import styles from "./MainScreenIcon.module.css";
import useProcess from "../../../utils/hooks/useProcess";
export default function MainScreenIcon({ icon }: MainScreenIconProps) {
  const { runProcess } = useProcess();
  return (
    <div
      onDoubleClick={() => {
        runProcess(icon);
      }}
      className={styles.MainScreen_Icon_Container}
    >
      <div className={styles.MainScreen_Icon_Area}>
        <img
          className={styles.MainScreen_Icon_Img}
          src={icon.img}
          alt={icon.name}
        />
        <p className={styles.MainScreen_Icon_Name}>{icon.name}</p>
      </div>
    </div>
  );
}
