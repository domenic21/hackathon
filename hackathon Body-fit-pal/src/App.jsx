import React,{useEffect} from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import './App.css'
//Pages
import {Calendar,Nutrition,Workouts, Area,Line,Pie,HomePage,BmiCalculator,SleepMonitor} from './pages/'
//components
import {Navbar,Footer,Sidebar,ThemeSettings} from './components/index'
import { useStateContext } from './context/ContextGeneral'
const App =()=> {
  const  {activeMenu} = useStateContext();
  const currentMode = false;
  const currentColor = true;

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {ThemeSettings && (<ThemeSettings />)}
        <Routes>
          
          {/* dashboard  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Nutrition" element={<Nutrition />} />

          {/**Pages */}
          <Route path="/Workouts" element={<Workouts />} />

          {/*apps*/}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/SleepMonitor" element={<SleepMonitor />} />

             {/* charts  */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/pie" element={<Pie />} />
        </Routes>
      
        </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
