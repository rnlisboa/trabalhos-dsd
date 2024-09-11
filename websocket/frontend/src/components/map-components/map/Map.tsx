import React from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGl, { Marker, Source, Layer, ViewState, MapRef } from "react-map-gl";
import { TOKEN } from '../../../service/mapbox/config';
import { ViewProps } from '../../../dtos/Map';




type MapProps = {
    viewport: ViewProps;
    mapRef: React.RefObject<MapRef>;
    route: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
    setViewPort: (value: ViewState) => void;

}

function Map({ ...p }: MapProps) {

    return (
        <ReactMapGl
            ref={p.mapRef}
            initialViewState={{ ...p.viewport }}
            mapboxAccessToken={TOKEN}
            mapStyle={"mapbox://styles/mapbox/dark-v11"}
            onMove={evt => p.setViewPort(evt.viewState)}
        >

            {p.route && (
                <Source id="route" type="geojson" data={p.route}>
                    <Layer
                        id="route"
                        type="line"
                        source="route"
                        layout={{
                            'line-join': 'round',
                            'line-cap': 'round'
                        }}
                        paint={{
                            'line-color': '#003C46',
                            'line-width': 6
                        }}
                    />
                </Source>
            )}
        </ReactMapGl>
    );
}

export default Map;