import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { NavigationContextProvider } from './contexts/navigationContext';
import NavigationControllerWrapper from './layouts/NavigationControllerWrapper';
import { useEffect } from 'react';

function AppRoutes() {

  useEffect(()=>{



  }, [])

  return (
    <>
      <HashRouter>
        <NavigationContextProvider>
          <Routes>
            <Route path='/' element={<NavigationControllerWrapper/>}>
                <Route path='/'  element={<HomePage/>}/> 
            </Route>
          </Routes>
        </NavigationContextProvider>
      </HashRouter>
    </>
  )
}

export default AppRoutes;
