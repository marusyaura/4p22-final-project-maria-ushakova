import './App.css';

import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/Index/Index';
import ProductPage from './pages/Product/Product';
import DefaultLayout from './layouts/DefaultLayout';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
          <Route index element={<IndexPage/>} />
          <Route path={'products'}>
            <Route path={':userId'} element={<ProductPage/>} />
          </Route>
        </Route>
      </Routes>

      </div>
  )}

export default App;