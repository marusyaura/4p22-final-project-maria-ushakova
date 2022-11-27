import './App.css';

import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/Index/Index';
import ProductPage from './pages/Product/Product';
import DefaultLayout from './layouts/DefaultLayout';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route index path={'/'} element={<IndexPage/>} />
          <Route path={'product'}>
            <Route path={':userId'} element={<ProductPage/>} />
          </Route>
      </Routes>
      </div>
  )}

export default App;