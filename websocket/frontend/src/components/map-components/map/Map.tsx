import React from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker, Source, Layer, ViewState, MapRef } from "react-map-gl";
import { TOKEN } from '../../../service/mapbox/config';
import { Coordinates, ViewProps } from '../../../dtos/Map';
import cat from "../../../assets/car.png"
type MapProps = {
    viewport: ViewProps;
    mapRef: React.RefObject<MapRef>;
    route: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
    setViewPort: (value: ViewState) => void;
    coordOrigem: Coordinates | null,
    coordDestino: Coordinates | null,
    distance: number;
}

function Map({ viewport, mapRef, route, setViewPort, coordOrigem, coordDestino,distance }: MapProps) {

    return (
        <ReactMapGL
            ref={mapRef}
            initialViewState={{ ...viewport }}
            mapboxAccessToken={TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            onMove={evt => setViewPort(evt.viewState)}
        >
            {/* Renderização dos Marcadores */}
            {coordOrigem && (
                <Marker latitude={coordOrigem.latitude} longitude={coordOrigem.longitude}>
                    <div style={{ color: 'blue', fontSize: '2rem' }}>📍</div>
                    <div style={{color: '#f4f4f4', fontSize: '2rem'}}>
                        {distance >= 1000 ? `${distance} km` : `${distance} m`}
                    </div>
                </Marker>
            )}

            {coordDestino && (
                <Marker latitude={coordDestino.latitude} longitude={coordDestino.longitude}>
                    <div style={{ color: 'blue', fontSize: '2rem' }}>📍</div> {/* Exemplo de ícone */}
                </Marker>
            )}

            {/* Renderização da Rota */}
            {route && (
                <Source id="route" type="geojson" data={route}>
                    <Layer
                        id="route"
                        type="line"
                        source="route"
                        layout={{
                            'line-join': 'round',
                            'line-cap': 'round'
                        }}
                        paint={{
                            'line-color': '#f4f4f4',
                            'line-width': 5
                        }}
                    />
                </Source>
            )}
        </ReactMapGL>
    );
}

export default Map;
