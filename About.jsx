import { useParams } from "react-router-dom"
import { Tilt } from "react-tilt"
import'./About.css'
import Data from "./Data"

const About = ({handleClick}) => {
    const{id}=useParams()
    const data =Data.find((data)=>data.id===parseInt(id))
    

  return (
    
    <div className="About">
      <Tilt>
        <img className="hover"  src={data.image} height={'300px'} width={'300px'}></img>
        </Tilt>
        <div className="about">
        <p className="title">{data.title}</p>
        <p className="price">{data.price}</p>
        <p className="des">{data.description}</p>
        <button onClick={()=>handleClick(data)}>Add Cart</button>

        </div>
        
        
      
    </div>
   
   
    
  )
}

export default About
