"use client";

import {
  createContext,
  ReactNode,
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import { jspreadsheet } from "@jspreadsheet/react";
import parser from "@jspreadsheet/parser";
import formula from "@jspreadsheet/formula-pro";

// Constants:
import { JSS_LICENSE_KEY } from "@/constants/services";

jspreadsheet.setLicense(JSS_LICENSE_KEY);
jspreadsheet.setExtensions({ parser: parser, formula: formula });

interface JSSContextProps {}

export const JSSContext = createContext<JSSContextProps | undefined>(undefined);

interface JSSProviderProps {
  children: ReactNode;
}

export const JSSProvider: FunctionComponent<JSSProviderProps> = ({
  children,
}) => {
  const [spreadsheet, setSpreadsheet] =
    useState<jspreadsheet.spreadsheetInstance | null>(null);
  const [jss, setJss] = useState<jspreadsheet.worksheetInstance[] | null>(null);
  const [activeSheet, setActiveSheet] =
    useState<jspreadsheet.worksheetInstance | null>(null);

  // On open:
  useEffect(() => {
    if (spreadsheet && !spreadsheet.jspreadsheet) {
      setJss(
        jspreadsheet(spreadsheet, {
          tabs: false,
          bar: false,
          // events:
          onopenworksheet: (worksheet, _) => {
            setActiveSheet(worksheet);
          },
        })
      );
    }
  }, [spreadsheet]);

  useEffect(() => {
    setActiveSheet(jspreadsheet.current);
  }, [jss]);

  return (
    <JSSContext.Provider
      value={{
        spreadsheet,
        setSpreadsheet,
        jss,
        activeSheet,
        setActiveSheet,
      }}
    >
      {children}
    </JSSContext.Provider>
  );
};
