import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
export const CartWidget = () => {
    const {cart, getQuantity } =useCartContext()

    return (
        cart.length > 0 ?
        <>
        <div className="row">
            <div className="col">
                <div className="row text-center">
                    <span className='fw-bold text-black'>{getQuantity()}</span>
                </div>
                <div className="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                        <Link to='/cart'>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>                
                        </Link>
                    </svg>            
               </div>
            </div>
        </div>
        </>
        :
        <></>
    );
}

