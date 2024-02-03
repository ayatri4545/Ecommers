import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({item,handleClick}) => {
    const{title,price,image,rating}=item
  return (
    <div className="Card" >
     <div className='card'>
       <Link to={`/about/${item.id}`}><img src={image} height={'200px'} width={'200px'} ></img></Link>
         <p>{title}</p>
         <p>{price}</p>
         <p>{rating.rate}</p>
         <button onClick={()=>handleClick(item)}>Add Cart</button>
      </div>
    </div>
  )
}

export default Card
