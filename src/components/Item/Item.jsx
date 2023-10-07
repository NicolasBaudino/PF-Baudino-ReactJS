import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <>
      <div className='col'>
        <div className="card text-center">
            <div className="card-body">
                <img className="w-100 card-img-top" src={product.imageUrl} alt="Imagen producto" />
                <p>{product.name}</p>
                <p>Descripcion: {product.description}</p>
                <p>Precio: ${product.price}</p>
            </div>
            <div className="card-footer">
              <Link to={`/detalle/${product.id}`}>
                <button className="btn btn-outline-dark w-100">
                  Detalle
                </button>
              </Link>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Item