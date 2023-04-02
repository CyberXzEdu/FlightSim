import React from "react";
import { ipcRenderer } from "electron";

function openWindow (id: string) {
  ipcRenderer.invoke("open-new-window", id);
}

function Home () {
  return (
    <>
      <button
        onClick={ () => openWindow("debug") }
      >
        Debug
      </button>

      <button
        onClick={ () => openWindow("ecam-elec") }
      >
        ECAM SD ELEC
      </button>

      <button
        onClick={ () => openWindow("overhead/elec") }
      >
        Overhead ELEC
      </button>
    </>
  );
}

export default Home;