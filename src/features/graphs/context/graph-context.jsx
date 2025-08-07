import React, { createContext, useContext } from 'react'
const GraphContext = createContext()

function GraphProvider({children}) {
  const data = {}
  return (
    <GraphContext.Provider value={data}>
      {children}
    </GraphContext.Provider>
  )
}

const useDashboardContext = () =>{
  return useContext(GraphContext)
}

export default GraphProvider