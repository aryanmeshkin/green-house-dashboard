import React from "react";
import Controls from "../../features/controls/controls";
import ControlProvider from "../../features/controls/context/control-context";

function ControlPage() {
  return (
    <ControlProvider>
      <Controls />
    </ControlProvider>
  );
}

export default ControlPage;
