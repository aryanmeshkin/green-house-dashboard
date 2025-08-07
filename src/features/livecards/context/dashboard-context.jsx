import React, { createContext, useContext } from 'react'
const DashboardContext = createContext()

function DashboardProvider({children}) {
  const data = {}
  return (
    <DashboardContext.Provider value={data}>
      {children}
    </DashboardContext.Provider>
  )
}

const useDashboardContext = () =>{
  return useContext(DashboardContext)
}

export default DashboardProvider