import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import Header from './components/Header';
import {useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import Restaurants from './components/Restaurants';




function Home() {

const[data,setData]=useState([])

useEffect(()=>{

    const fetchData = async()=>{
        await fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((data)=>setData(data.restaurants))
    }
fetchData();

},[])

console.log(data);







    return (
     <>
     
     <Header/>

     {data ? (
         <Row>
             {data.map(item =>(
                 <Col sm={12} md={8} lg={6} xl={3}>

                     <Restaurants item={item}/>
                
                     </Col>


))}
</Row>
):"null"}

</>
)
}

export default Home