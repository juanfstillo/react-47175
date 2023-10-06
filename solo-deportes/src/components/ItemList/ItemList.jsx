import React from 'react'
import { Card } from '../Card/Card'

export const ItemList = ({productList}) => {
  return (
    <div className='container'>
      <div className="row">
        {
          productList.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </div>

  )
}