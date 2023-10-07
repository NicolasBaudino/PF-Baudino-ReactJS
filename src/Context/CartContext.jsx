import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProduct = (newProduct) => {
    //para agrupar los productos iguales
    const idx = cartList.findIndex(producto => producto.id == newProduct.id)
    if (idx !== -1){
      cartList[idx].quantity += newProduct.quantity
      setCartList([...cartList])
    }
    else {
      setCartList([
        ...cartList,
        newProduct
      ])
    }
    
  }

  const cantidadTotal = () => cartList.reduce((count, objProducto) => count += objProducto.quantity, 0)

  const precioTotal = () => cartList.reduce((count, objProducto) => count += (objProducto.quantity * objProducto.price), 0)

  const eliminarItem = id => setCartList(cartList.filter(product => product.id !== id))

  const deleteCart = () =>{
    setCartList([])
  }

  return (
    <CartContext.Provider value = {{cartList, addProduct, deleteCart, cantidadTotal, precioTotal, eliminarItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

