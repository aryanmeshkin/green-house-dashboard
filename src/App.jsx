import { RouterProvider } from 'react-router'
import './App.css'
import router from './router'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer/>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
