"use client";

import React, { useContext, useEffect, useRef } from "react";

// Contexts:
import { JSSContext } from "@/contexts/JSSContext";

export default function Grid() {
  const spreadsheet = useRef(null);

  const { setSpreadsheet, jss } = useContext(JSSContext);

  useEffect(() => {
    if (spreadsheet.current) {
      setSpreadsheet(spreadsheet.current);
    }
  }, [setSpreadsheet]);

  return (
    <>
      {!jss && <p>...</p>}
      <div
        className={`border border-zinc-200 overflow-x-auto ${
          !jss && "invisible"
        }`}
      >
        <div className="grid" ref={spreadsheet} />
      </div>
    </>
  );
}
