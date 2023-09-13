import React from 'react'
import  Card from '../Card/Card'

 const ItemList = ({productList}) => {
  return (
    <div className='d-flex'>
      {
        productList.map(item => <Card key={item.id} item={item} />)
      }
    </div>

  )
}

export default ItemList;