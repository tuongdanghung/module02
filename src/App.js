import { Route, Routes } from 'react-router-dom';
import path from './utils/path'
import { Login, Home, Extend } from './pages/public'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Extend />}>
          <Route path={path.HOME} element={<Home />}></Route>
          <Route path={path.ALL} element={<Home />}></Route>
        </Route>
        <Route path={path.LOGIN} element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
