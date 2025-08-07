import React, { createContext, useContext } from 'react'
const ControlContext = createContext()

function ControlProvider({children}) {
  const data = {}
  return (
    <ControlContext.Provider value={data}>
      {children}
    </ControlContext.Provider>
  )
}

const useDashboardContext = () =>{
  return useContext(ControlContext)
}

export default ControlProvider