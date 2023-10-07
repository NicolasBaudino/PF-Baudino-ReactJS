import { useCartContext } from '../../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../../Counter/ItemCount';
import { useState } from 'react';


const ItemDetail = ({product}) => {
  const [isInCount, setIsInCount] = useState(true)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    addProduct({...product, quantity})
    setIsInCount(false)
  }

  return (
    <>
      <div className='container text-center'>
        <div className='row'>
          <h2>Vista detalle</h2>
        </div>
        <div className='col'>
          <div className='row d-flex justify-content-center'>
            <img src={product.imageUrl} className='w-25' alt="imagen producto"/>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='w-auto border border-black border-opacity-25'>
              <p><strong>Nombre:</strong> {product.name}</p>
              <p><strong>Descripción:</strong> {product.description}</p>
              <p><strong>Precio:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-2'>
            {isInCount ? 
              <ItemCount initial = {1} stock={product.stock} onAdd={onAdd} />
            :
              <>
                <Link to={'/cart'}>
                  <button className='btn btn-primary m-1'>Ir al carrito</button>
                </Link>
                <Link to={'/'}>
                  <button className='btn btn-secondary m-1'>Seguir comprando</button>
                </Link>
              </>
            }
          </div>         
        </div>
      </div>
    </>
  )
}

export default ItemDetail