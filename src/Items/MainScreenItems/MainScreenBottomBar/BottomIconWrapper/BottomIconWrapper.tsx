import styles from "./BottomIconWrapper.module.css";
import { BottomIconWrapperProps } from "./BottomIconWrapper.type";

export default function BottomIconWrapper({
  children,
  OnClick,
}: BottomIconWrapperProps) {
  return <div className={styles.Icon_Wrapper_Container}>{children}</div>;
}
