import { useEffect, useRef, useState } from 'react';
import './App.css';
import Map from './components/map-components/map/Map';
import { MapRef } from 'react-map-gl';
import { Coordinates, ViewProps } from './dtos/Map';
import getRoute from './service/mapbox/getRoute';

function App() {
  const mapRef = useRef<MapRef>(null);
  const [currLocalization, setCurrLocalization] = useState<Coordinates | null>(null);
  const [destLocalization] = useState<Coordinates>({
    latitude: -5.811015200049461,
    longitude: -35.20270531534165
  });
  const [route, setRoute] = useState<any>(null);
  const [viewport, setViewport] = useState<ViewProps | null>(null);

  const getCurrRoute = async (data: Coordinates) => {
    const resp = await getRoute(data, destLocalization);
    setRoute(resp)
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      //getCurrRoute(data);
      // Atualizar localização e viewport
      setCurrLocalization({
        latitude: data.latitude,
        longitude: data.longitude
      });

      setViewport({
        latitude: data.latitude,
        longitude: data.longitude,
        zoom: 15
      });
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };

    // Limpeza ao desmontar o componente
    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div className='container'>
        {viewport && (
          <Map
            viewport={viewport}
            mapRef={mapRef}
            setViewPort={setViewport}
            route={route}
            coordOrigem={currLocalization}
            coordDestino={destLocalization}
          />
        )}
      </div>
    </>
  );
}

export default App;
