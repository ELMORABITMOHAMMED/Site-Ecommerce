import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {useEffect,useState} from "react"
import "./App.css";
import Slide from "../../Components/Slide"
import Product from "../../Components/Product"
import Header from "../../Components/Header"
import Home from "../Home"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";


const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const App =()=>{
 const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBW4GsXkL25g57SL9iKcwksjrTUXNMI9ro"
  })

  
 let [content,setContent] = useState(null)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then((response) => {
        setContent(response.data);
      });
  }, []);


  return(
    <Home>
      <Header />
      <Container className="mt-3 mb-3">
        <Slide />
      </Container>
      <Container>
        <Row>
        {content !== null ?content.map(item=><Col key={item.id} >
          <Product
            src={item.image} 
            text={item.description} 
            title={item.title} 
            price={item.price} 
            rate={item.rating.rate}
            count={item.rating.count}
           />
          </Col>): <h1>"No data found !"</h1>}
        </Row>
      </Container>
      <Container>
      {isLoaded ?
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        
       
      >
        {  }
      </GoogleMap >: "Loading..."}
  
      </Container>
    </Home>
  )
}
export default App;


