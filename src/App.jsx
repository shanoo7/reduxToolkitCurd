import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <div className='mt-30'>
        <Outlet />
      </div>
    </>
  )
}

export default App;
