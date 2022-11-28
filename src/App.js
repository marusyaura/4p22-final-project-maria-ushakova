import './App.css';

import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/Index/Index';
import ProductPage from './pages/Product/Product';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <div>
      <Routes>
          <Route index path={'/'} element={<IndexPage/>} />
          <Route path={'product'}>
            <Route path={':userId'} element={<ProductPage/>} />
          </Route>
      </Routes>
      </div>
      <Footer/>
      </div>
  )}

export default App;