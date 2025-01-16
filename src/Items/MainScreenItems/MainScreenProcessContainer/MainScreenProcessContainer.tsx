import styles from "./MainScreenProcessContainer.module.css";
import useProcess from "../../../utils/hooks/useProcess";

export default function MainScreenProcessContainer() {
  const { processes } = useProcess();
  console.log(processes);
  return (
    <div className={styles.MainScreen_Process_Container}>
      {processes?.map((process) => {
        return <div key={process.key}>{process.name}</div>;
      })}
    </div>
  );
}
