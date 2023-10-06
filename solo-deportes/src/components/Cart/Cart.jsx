import React from 'react';
import { useCartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {cart, removeProduct, getTotal} =useCartContext()

    

    return (
        
            cart.length > 0  ?
            (
                <div>
                    {cart.map((item, index) => {
                        return (
                            <div className="card mb-3 m-3">
                                <h3 className="card-header text-center">{item.title}</h3>
                                <div className="card-body">
                                </div>
                                <img className='' src={item.img} alt={item.title}/>

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Precio: ${item.precio}</li>
                                    <li className="list-group-item">Cantidad: {item.quantity}</li>
                                    <button className='btn btn-danger' onClick={ () => {removeProduct(item.id)}}>Eliminar</button>
                                </ul>
                            </div>
                        )
                    })}
                    <h1>Precio Total: {getTotal()}</h1>
                    <Link to='/checkout'>
                        <button className='btn btn-info'>
                            Finalizar Compra
                        </button>
                    </Link>
                </div>
            )
            :
            (
                <div>
                    <div className="cart-container"></div>            
                    <h1>No hay elementos en el carrito</h1>
                    <Link to="/">
                    <button className='btn btn-primary'>Seguir comprando</button>
                    </Link>
                </div>
            )
            
    );
}
