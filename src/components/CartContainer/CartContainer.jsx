import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext"
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: '', 
    phone: '', 
    email: ''
  })
  const [id, setId] = useState('') 
  const {cartList, deleteCart, precioTotal, eliminarItem} = useCartContext();

  const handleAddOrder = async (evt) => {
    evt.preventDefault()

  // VALIDACIONES FORMULARIO
  if (!dataForm.name || !dataForm.phone || !dataForm.email || !dataForm.email2) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Todos los campos deben ser completados!'
  })
  return;
  }
  else if (dataForm.email !== dataForm.email2) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Los correos electrónicos no coinciden!'
    })
    return;
  }
  
    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(prod => {
      return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
    })
    order.total = precioTotal()

    const queryDB = getFirestore()
    const ordersCollection = collection(queryDB, 'orders')
    addDoc(ordersCollection, order)
    .then(({id}) => setId(id))
    .catch(err => console.log(err))
    .finally(()=>{
      setDataForm({
        name: '', 
        phone: '', 
        email: '',
        email2: ''
      })
      deleteCart()
    })
    }

    const handleOnChange = (evt) => {
      setDataForm({
        ...dataForm,
        [evt.target.name] : evt.target.value
      })
    }

    console.log(dataForm)

  return (
  <>
      {id !== '' && <h3>Se generó la orden de compra: {id}</h3>}
      {
        cartList.length > 0 ? 
          <div>
            <div className="w-50 m-auto row text-center border-bottom g-2">
                <div className="col">
                </div>
                <div className="col">
                  <h4>Nombre</h4>
                </div>
                <div className="col">
                  <h4>Precio</h4>
                </div>
                <div className="col">
                  <h4>Cantidad</h4>
                </div>
                <div className="col">
                </div>
              </div>
            {cartList.map(prod => <div key={prod.id}>
              <div className="w-50 m-auto row text-center border-bottom g-2">
                <div className="col d-flex align-items-center justify-content-center">
                  <img src={prod.imageUrl} style={{width:"100px"}}/>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <h5>{prod.name}</h5>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <h5>${prod.price}</h5>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <h5>{prod.quantity}</h5>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <button className="btn btn-danger" onClick={() => eliminarItem(prod.id)}>Eliminar producto</button>
                </div>
              </div>
            </div>)}
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-danger" onClick={deleteCart}>Vaciar carrito</button>
            </div>
            
            <div className="d-flex justify-content-center mt-3 w-auto">
              <h2 className="border border-black border-opacity-25 p-3"><strong>Precio total:</strong> ${precioTotal()}</h2>
            </div>
            
        
            <form onSubmit={handleAddOrder}>
              <div className="d-flex justify-content-center">
                <input type="text" name='name' placeholder="Ingrese el nombre" value={dataForm.name} onChange={handleOnChange}/>
                <input type="text" name='phone' placeholder="Ingrese el telefono" value={dataForm.phone} onChange={handleOnChange}/>
                <input type="text" name='email' placeholder="Ingrese el email" value={dataForm.email} onChange={handleOnChange}/>
                <input type="text" name='email2' placeholder="Ingrese el email" value={dataForm.email2} onChange={handleOnChange}/>
              </div>

              <div className="d-flex justify-content-center">
                <button className="btn btn-success m-1">Terminar compra</button>
              </div>
              
            </form>
        
          </div>
          :
          <div className="container text-center">
            <div className="col-12">
              <h2>No hay productos en el carrito</h2>
            </div>
            <div className="col-12">
              <Link to="/">Volver a los productos</Link>
            </div>
          </div>
      }
  </>
    
      
  )
}

export default CartContainer