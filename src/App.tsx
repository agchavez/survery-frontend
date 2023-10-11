
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import { LoginPage } from './pages/auth';
import { HomePage } from './pages/home';
import { RegisterPage } from './pages/auth/RegisterPage';
import ConnetRoomPage from './pages/auth/ConnetRoomPage';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const html = document.querySelector('html');

    if (darkMode) {
      console.log('darkMode', html);
      html?.classList.add('dark');
    } else {
      html?.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    // Formulario de Login de usuario con tailwindcss
    <>
    <div className='h-screen w-screen'>

 
      <div className="bg-white dark:bg-gray-800 text-end pt-0 pl-3 h-10 w-full">

        {/* Swicth de cambio de tema */}
        <label className="flex items-center cursor-pointer h-10 mt-0">
          <div className="mr-3 text-gray-700 font-medium dark:text-gray-200">
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only w-22 h-10"
              checked={darkMode}

              onChange={toggleDarkMode}
            />
            <div className={`block w-10 h-6 rounded-full bg-gray-300 dark:bg-gray-600 transition duration-500 ease-in-out ${!darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <div className={`dot absolute left-1 top-1  w-4 h-4 rounded-full transition bg-white ${darkMode ? 'translate-x-full' : 'translate-x-0'}`}></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium dark:text-gray-200">
            <FontAwesomeIcon icon={faSun} />
          </div>
        </label>


      </div>

        <ConnetRoomPage />
      </div>
    </>
  )
}

export default App
