import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './Context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

// BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:cid' element={<ItemListContainer/>}/>
            <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
	)
}

export default App
