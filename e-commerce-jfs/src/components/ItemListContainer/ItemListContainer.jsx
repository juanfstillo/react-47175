import React, {useState, useEffect} from 'react'
import  ItemList  from '../ItemList/ItemList'
import { products } from '../../data/itemdata'
import { useParams } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'


const ItemListContainer = () => {

    const [productList, setProductList] = useState([])

    const {categoria} = useParams()
  
    const getProducts = () => new Promise((resolve, reject) => {
      if(categoria){
        setTimeout(()=> resolve(products.filter(item => item.categoria === categoria)), 2000)
      } else {
        setTimeout(()=> resolve(products), 2000)
      }
    })
  
    useEffect(() => {
      getProducts()
      .then(products => setProductList(products))
      .catch(error => console.error("el error es",error))  

      return () => {
      setProductList([])
    }
    }, [categoria])
  
  
    return (
      <>
      {
        productList.length ? <ItemList productList={productList} /> : <Orbit size={35} color="#231F20" />
      }      
      </>
    )
  }
  
  export default ItemListContainer;