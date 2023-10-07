import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const[product, setProduct] = useState({});
  const {pid} = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, 'products', pid);
    getDoc(queryDoc)
    .then(resp =>({id: resp.id, ...resp.data()}))
    .then(resp =>setProduct(resp))
  }, [])  

  return (
    <>
      <ItemDetail product = {product}/>
    </>
  )
}

export default ItemDetailContainer