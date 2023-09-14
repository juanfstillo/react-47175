import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';


 const Card = ({item}) => {
   console.log(item)
  const {title, img, precio, stock, id} = item
  return (
    <div className="col-lg-4 mb-3">
    <div className="card">
      <h3 className="card-header text-center">{title}</h3>
      <div className="card-body">
        <img className="img-fluid" src={img} alt={title} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: ${precio}</li>
          <li className="list-group-item">Stock: {stock}</li>
        </ul>
      </div>
      <div className="card-footer text-center">
        <Link to={`/detalles/${id}`}>
          <button className="btn btn-info button-detail">Ver más detalles</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Card
