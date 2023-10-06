import React, {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Orbit } from '@uiball/loaders'
import { getProducto } from '../../firebase/firebase.js'


export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState()
   

    const getItem = async (id) => { 
      try {
        const producto = await getProducto(id)
        const result = {id: producto.id, ...producto.data()}
        setItem(result)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        getItem(id)        
    }, [id])

    return (
        <>
          {
            item ? <ItemDetail item={item}/> : <Orbit size={35} color="#231F20" />
          }
        </>
    );
}
