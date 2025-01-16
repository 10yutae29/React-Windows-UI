import { useContext } from "react";
import { processContext } from "../ContextProvider/ProcessProvider";
import { zIndexContext } from "../ContextProvider/ZIndexProvider";
import { Program } from "../ProcessType";

export default function useProcess() {
  const { processes, setProcesses, getKey } = useContext(processContext);
  const { zIndex, addZIndex } = useContext(zIndexContext);

  const runProcess = (icon: Program) => {
    // 일단 더블클릭했을 때 중복되더라도 열도록 함
    const key = getKey();
    const process = { ...icon, idx: zIndex, isShow: true, key };
    addZIndex();
    const newProcesses = [...processes];
    newProcesses.push(process);
    setProcesses(newProcesses);
  };

  return { runProcess, processes };
}
