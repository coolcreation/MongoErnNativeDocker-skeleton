import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import PersonalMenu from './components/PersonalMenu.jsx'
import TaskMenu from './components/TaskMenu.jsx'
import EmployeeCard from './components/EmployeeCard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* <PersonalMenu />
    <TaskMenu /> */}
    <div className='container p-3'>
      <App />
       <EmployeeCard />
    </div>
  </StrictMode>,
)
