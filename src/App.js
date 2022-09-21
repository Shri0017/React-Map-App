import { useState } from 'react';
import './App.css';
import {Map, Marker} from 'react-map-gl'
function App() {
  let [viewPort, SetViewPort] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 8,
  });
  return (
    <div className='app'>
      <div style={{backgroundColor:'ButtonHighlight' ,position:'absolute' ,height:'40px',width:'40vw',padding:'10px',zIndex:'1',color:'black'}}>
         longitude: {viewPort.longitude} || 
         latitude: {viewPort.latitude} || 
         zoom:{viewPort.zoom}</div>
   <Map 
    mapboxAccessToken='pk.eyJ1Ijoic2hyaXBhdGlsIiwiYSI6ImNsM2pza2QwMTF6NDYzY3JzZTE2cTh5djIifQ.ZnWMGFm9MUaScMLeXvgV9g'
   {...viewPort} 
   onMove={evt => {
      SetViewPort(evt.viewState)}}
   mapStyle="mapbox://styles/mapbox/streets-v9"
   style={{width:'100vw',height:'100vh',position:'relative'}}
    
   />
</div>
  );
}

export default App;
