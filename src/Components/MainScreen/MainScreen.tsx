import styles from "./MainScreen.module.css";
import type { MainScreenProps } from "./MainScreenType";
import MainScreenBottomBar from "../../Items/MainScreenItems/MainScreenBottomBar/MainScreenBottomBar";
import MainScreenBackground from "../../Items/MainScreenItems/MainScreenBackground/MainScreenBackground";
import MainScreenIconsContainer from "../../Items/MainScreenItems/MainScreenIconsContainer/MainScreenIconsContainer";
import MainScreenProcessContainer from "../../Items/MainScreenItems/MainScreenProcessContainer/MainScreenProcessContainer";
import ZIndexProvider from "../../utils/ContextProvider/ZIndexProvider";
import ProcessProvider from "../../utils/ContextProvider/ProcessProvider";
import InfosProvider from "../../utils/ContextProvider/InfosProvider";

export default function MainScreen({
  backgroundImg = null,
  icons,
  directoryStructure,
  componentsInfos,
}: MainScreenProps) {
  return (
    <div className={styles.Mainscreen_Container}>
      <ProcessProvider>
        <ZIndexProvider>
          <InfosProvider
            componentsInfos={componentsInfos}
            directoryStructure={directoryStructure}
          >
            <>
              <div className={styles.Mainscreen_Section}>
                <MainScreenBackground backgroundImg={backgroundImg} />
                <MainScreenIconsContainer icons={icons} />
                <MainScreenProcessContainer />
              </div>
              <MainScreenBottomBar />
            </>
          </InfosProvider>
        </ZIndexProvider>
      </ProcessProvider>
    </div>
  );
}
