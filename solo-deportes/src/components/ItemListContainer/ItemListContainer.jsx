import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
import { getProductos, getProductosPorCategoria } from '../../firebase/firebase.js'

export const ItemListContainer = () => {
    const [productList, setProductList] = useState([])

    const {categoria} = useParams()
  
    const getData = async () => { 
      try {
        const productos = await getProductos()
        const items =  productos.docs.map(producto => producto = {id: producto.id, ...producto.data()})
        setProductList(items)
      } catch (error) {
        console.log(error)
      }
    }

    const getDataCategory = async (categoria) => { 
      try {
        const productos = await getProductosPorCategoria(categoria)
        const items =  productos.docs.map(producto => producto = {id: producto.id, ...producto.data()})
        setProductList(items)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
       categoria ? getDataCategory(categoria) : getData()
    }, [categoria])
  
    
  
    return (
      <>
      {
        productList.length ? <ItemList productList={productList} /> : <Orbit size={35} color="#231F20" />
      }      
      </>
    )
  }
  