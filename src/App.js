import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index/Index';
import ProductPage from './pages/Product/Product';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BasketPage from './pages/Basket/Basket';
import FeedbackPage from './pages/Feedback/Feedback';
import EnterPage from './pages/Enter/Enter';

function App() {

  return (
    <div className="App">
      <Header/>
      <div>
      <Routes>
          <Route index path={'/'} element={<IndexPage/>} />
          <Route path={'basket'} element={<BasketPage/>} />
          <Route path={'feedback'} element={<FeedbackPage/>} />
          <Route path={'enter'} element={<EnterPage/>} />
          <Route path={'product'}>
            <Route path={':userId'} element={<ProductPage/>} />
          </Route>
      </Routes>
      </div>
      <Footer/>
      </div>
  )}

export default App;