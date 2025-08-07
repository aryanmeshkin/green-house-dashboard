import React from "react";
import Graphs from "../../features/graphs/graphs";
import GraphProvider from "../../features/graphs/context/graph-context";


function GrapgPage() {
  return (
    <GraphProvider>

      <Graphs />
    </GraphProvider>
    
  );
}

export default GrapgPage;
