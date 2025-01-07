import { WindowsIcon } from "../../../../WindowsElements/Icons";
import BottomBarSearch from "../BottomBarSearch/BottomBarSearch";
import BottomIconWrapper from "../BottomIconWrapper/BottomIconWrapper";
import styles from "./BottomBarMiddle.module.css";
export default function BottomBarMiddle() {
  return (
    <div className={styles.MainScreen_BottomBar_Middle_Container}>
      <BottomIconWrapper>
        <WindowsIcon />
      </BottomIconWrapper>
      <BottomBarSearch />
    </div>
  );
}
