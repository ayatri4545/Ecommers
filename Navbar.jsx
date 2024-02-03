import { Link } from 'react-router-dom'
import './Navbar.css'
import Data from './Data'
import Image from "./logo.jpg"


const Navbar = ({setData,setSearch,cart}) => {
 
  function filterResult1 (catItem){
  const newData=Data
  const result=newData.filter((item)=>{return item.category ===catItem})
  setData(result)
 }
 
 function filterResult2 (catItem){
  const newData=Data
  const result=newData.filter((item)=>{return item.category ===catItem})
  setData(result)
 }
 
 function filterResult3 (catItem){
  const newData=Data
  const result=newData.filter((item)=>{return item.category ===catItem})
  setData(result)
 }
 
 function filterResult4 (catItem){
  const newData=Data
  const result=newData.filter((item)=>{return item.category ===catItem})
  setData(result)
 }
 
  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="logo"><img src={Image} height={110}width={140} alt="" /></div>
       <Link to={'/'}> <div className="navdiv"><h1 className="navh1">Super Store<br></br>
                             2.0</h1></div></Link>
        <div className="navdiv"><input className="navinput" onChange={(e)=>setSearch(e.target.value)} type='search' placeholder="Search Item here"></input></div>
       <Link to={'/cart'}> <div className="navdiv">Cart <sup>{cart}</sup></div></Link>
      </nav>
      <div className="as">
      <aside>
        <button onClick={()=>filterResult1(`men's clothing`)}>Men</button>
        <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
        <button onClick={()=>filterResult3(`electronics`)}>Electronic</button>
        <button onClick={()=>filterResult4(`jewelery`)}>Jewellers</button>
        {/* <Link to={'/card'}> <p>All</p></Link> */}
      </aside>
      <div className="heading"><p>Shop Now And Get Amazing Offer*</p></div>
      </div>
    </div>
  )
}

export default Navbar
