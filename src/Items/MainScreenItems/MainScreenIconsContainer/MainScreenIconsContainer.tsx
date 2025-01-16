import MainScreenIcon from "../MainScreenIcon/MainScreenIcon";
import styles from "./MainScreenIconsContainer.module.css";
import { MainScreenIconsContainerProps } from "./MainScreenIconsContainerType";

export default function MainScreenIconsContainer({
  icons,
}: MainScreenIconsContainerProps) {
  return (
    <div className={styles.MainScreen_Icons_Container}>
      {icons.map((icon, idx) => (
        <MainScreenIcon key={idx} icon={icon} />
      ))}
    </div>
  );
}
