import { useEffect, useRef, useState } from 'react'

import './App.css'
import Map, { ViewProps } from './components/map-components/map/Map'
import { MapRef, ViewState } from 'react-map-gl'
import getRoute from './service/mapbox/getRoute';
import { Coordinates } from './dtos/Map';

function App() {

  const mapRef = useRef<MapRef>(null);
  const [currLocalization, setCurrLocalization] = useState<Coordinates | null>(null)
  const [destLocalization, setCurrLocalization] = useState<Coordinates | null>(null)
  const [viewport, setViewport] = useState<ViewProps>({
    latitude: -5.687981,
    longitude: -35.273460,
    zoom: 15
  });

  const getUserRoute = async () => {
    try{
      const resp = await getRoute();
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{

  },[])


  return (
    <>
      <div className='container'>
        <Map viewport={viewport} mapRef={mapRef} setViewPort={setViewport}   route={null}   
        />
        </div>
    </>
  )
}

export default App
