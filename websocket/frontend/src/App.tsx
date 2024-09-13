import { useEffect, useRef, useState } from 'react';
import './App.css';
import Map from './components/map-components/map/Map';
import { MapRef } from 'react-map-gl';
import { Coordinates, ViewProps } from './dtos/Map';
import getRoute from './service/mapbox/getRoute';
import ApiService from './service/gateway/apiService';

function App() {
  const service: ApiService = new ApiService();
  const mapRef = useRef<MapRef>(null);
  const [currLocalization, setCurrLocalization] = useState<Coordinates | null>(null);
  const [distance, setDistance] = useState<number>(0);

  const [destLocalization] = useState<Coordinates>({
    latitude: -5.811015200049461,
    longitude: -35.20270531534165
  });
  const [route, setRoute] = useState<any>(null);
  const [viewport, setViewport] = useState<ViewProps | null>(null);

  const getCurrRoute = async (data: Coordinates) => {
    const resp = await service.getRoute(data.latitude, data.longitude, destLocalization.latitude, destLocalization.longitude);
    setRoute(resp.data.result.rota.routes[0].geometry)
  }

  const getCurrDistance = async (data: Coordinates) => {
    const resp = await service.getDistance(data.latitude, data.longitude, destLocalization.latitude, destLocalization.longitude);
    setDistance(resp.data.result.distancia)
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      getCurrRoute(data);
      // Atualizar localização e viewport

      getCurrDistance(data);
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
            distance={distance}
          />
        )}
      </div>
    </>
  );
}

export default App;
