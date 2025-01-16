import { createContext, useContext, useState } from "react";
import { Process, Processes } from "../ProcessType";

interface ProcessContext {
  processes?: Process[];
  setProcesses?: React.Dispatch<React.SetStateAction<Process[]>>;
  getKey?(): number;
}

export const processContext = createContext<ProcessContext>({});

export default function ProcessProvider({ children }) {
  const [processes, setProcesses] = useState<Process[]>([]);
  const [key, setKey] = useState(0);
  const getKey = () => {
    setKey((prev) => prev + 1);
    return key;
  };
  return (
    <processContext.Provider value={{ processes, setProcesses, getKey }}>
      {children}
    </processContext.Provider>
  );
}
