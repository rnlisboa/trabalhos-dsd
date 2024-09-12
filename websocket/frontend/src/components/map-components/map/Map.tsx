import React from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker, Source, Layer, ViewState, MapRef } from "react-map-gl";
import { TOKEN } from '../../../service/mapbox/config';
import { Coordinates, ViewProps } from '../../../dtos/Map';

type MapProps = {
    viewport: ViewProps;
    mapRef: React.RefObject<MapRef>;
    route: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
    setViewPort: (value: ViewState) => void;
    coordOrigem: Coordinates | null,
    coordDestino: Coordinates | null,
}

function Map({ viewport, mapRef, route, setViewPort, coordOrigem, coordDestino }: MapProps) {

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
                    <div style={{ color: 'red' }}>📍</div> {/* Exemplo de ícone */}
                </Marker>
            )}

            {coordDestino && (
                <Marker latitude={coordDestino.latitude} longitude={coordDestino.longitude}>
                    <div style={{ color: 'blue' }}>📍</div> {/* Exemplo de ícone */}
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
                            'line-width': 10
                        }}
                    />
                </Source>
            )}
        </ReactMapGL>
    );
}

export default Map;
