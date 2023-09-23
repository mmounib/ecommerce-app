import { Outlet } from 'react-router'
import './App.css'
import { Footer, Navbar } from './exports'

const App = () => {

  return (
    <div className=' max-w-[1600px] mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
