import './ItemDetail.css';
import { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
export const ItemDetail = ({item}) => {

  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext()
  
  
  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(item, quantity)
  }

  return (
    <>      
      <div className="card-detail">
        <div className="card-detail-left">
          <img className='img' src={item.img} alt={item.title}/>
        </div>        
          <div className="card-detail-right text-center">
            <h4>{item.title}</h4>
            
            
            {
              goToCart ?
                <div className="text-center">                  
               <Link to='/cart'>Terminar Compra</Link>
               </div>
                :
                 <ItemCount item={item} initial={1} onAdd={onAdd}/>
            }
          </div>          
      </div>
    </>
  )
}
