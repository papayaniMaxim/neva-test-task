import { HashRouter, Route, Routes } from 'react-router-dom';
import LayoutTaskDesktop from './components/LayoutTask/Desktop/LayoutTaskDesktop/LayoutTaskDesktop';
import JSTaskAB from './components/JSTaskAB/JSTaskAB';
import JSTaskTable from './components/JSTaskTable/JSTaskTable';
import LayoutTask from './components/LayoutTask/LayoutTask';
import Navigation from './components/Navigation/Navigation';
import ResponsiveTable from './components/ResponsiveTable/ResponsiveTable';

function App() {
  return (
      <div >
          <HashRouter>
          <Navigation/>
              <Routes>
                  <Route path={'/'} element={<LayoutTask />} />
                  <Route path={'/layout/desktop'} element={<LayoutTaskDesktop />} />
                  <Route path={'/responsive-table'} element={<ResponsiveTable />} />
                  <Route path={'/js/task/1'} element={<JSTaskTable />} />
                  <Route path={'/js/task/2'} element={<JSTaskAB/>}/>
              </Routes>
          </HashRouter>
    </div>
  );
}

export default App;
