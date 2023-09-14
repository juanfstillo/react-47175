import './ItemDetail.css';


 const ItemDetail = ({item}) => {

  
  return (
    <>      
      <div className="card-detail">
        <div className="card-detail-left">
          <img className='img' src={item.img} alt={item.title}/>
        </div>        
          <div className="card-detail-right text-center">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <h5>$ {item.precio}</h5>

          </div>          
      </div>
    </>
  )
}

export default ItemDetail;