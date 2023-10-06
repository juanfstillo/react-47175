import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';


export const Card = ({item}) => {
  // console.log(item)
   const {title, img, precio, stock, id} = item
  return (
    <div className="col-lg-4 col-sm-6 p-2">
      <div className="card mb-3 m-3">
        <h3 className="card-header text-center">{title}</h3>
        <div className="card-body">
        </div>
        <img className='image mx-auto' src={img} alt={title}/>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: ${precio}</li>
          <li className="list-group-item">Stock: {stock}</li>
        </ul>
        <div className="card-footer text-center">
          <Link to={`/detalles/${id}`}>
            <button className='btn btn-secondary'>Ver mas detalles</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
