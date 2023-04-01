import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ipcRenderer } from "electron";

const ContentFrame = styled.div`

`;

function Debug () {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    ipcRenderer.on("data", (_, data) => {
      setData(JSON.stringify(data, null, 2).replace(/["{},]/g, ""));
    });

    ipcRenderer.on("message", (_, d) => {
      console.log(d);
    });
  }, []);

  return (
    <ContentFrame>
      <h1>Debug page</h1>
      <pre>{ data }</pre>
    </ContentFrame>
  );
}

export default Debug;