import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutTaskDesktop from './components/LayoutTask/Desktop/LayoutTaskDesktop/LayoutTaskDesktop';
import JSTaskAB from './components/JSTaskAB/JSTaskAB';
import JSTaskTable from './components/JSTaskTable/JSTaskTable';
import LayoutTask from './components/LayoutTask/LayoutTask';
import Navigation from './components/Navigation/Navigation';
import ResponsiveTable from './components/ResponsiveTable/ResponsiveTable';

function App() {
  return (
      <div >
          <BrowserRouter>
          <Navigation/>
              <Routes>
                  <Route path={'/neva_test_task'} element={<LayoutTask />} />
                  <Route path={'/neva_test_task/layout/desktop'} element={<LayoutTaskDesktop />} />
                  <Route path={'/neva_test_task/responsive-table'} element={<ResponsiveTable />} />
                  <Route path={'/neva_test_task/js/task/1'} element={<JSTaskTable />} />
                  <Route path={'/neva_test_task/js/task/2'} element={<JSTaskAB/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
