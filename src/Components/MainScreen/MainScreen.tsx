import styles from "./MainScreen.module.css";
import type { MainScreenProps } from "./MainScreenType";
import MainScreenBottomBar from "../../Items/MainScreenItems/MainScreenBottomBar/MainScreenBottomBar";
import MainScreenBackground from "../../Items/MainScreenItems/MainScreenBackground/MainScreenBackground";
import MainScreenIconsContainer from "../../Items/MainScreenItems/MainScreenIconsContainer/MainScreenIconsContainer";

export default function MainScreen({
  backgroundImg = null,
  icons,
}: MainScreenProps) {
  return (
    <div className={styles.Mainscreen_Container}>
      <div className={styles.Mainscreen_Section}>
        <MainScreenBackground backgroundImg={backgroundImg} />
        <MainScreenIconsContainer icons={icons} />
      </div>
      <MainScreenBottomBar />
    </div>
  );
}
