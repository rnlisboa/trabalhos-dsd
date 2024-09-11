import { FeatureCollection, Geometry } from 'geojson';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface ViewProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface MapComponentProps {
  viewport: ViewProps;
  coordinates: Coordinates | null;
  route: FeatureCollection<Geometry>;
  setViewPort: (viewport: ViewProps) => void;
}

type Context = {
  id: string;
  mapbox_id: string;
  short_code: string;
  text: string;
  wikidata: string;
};

type Properties = {
  mapbox_id: string;
  wikidata: string;
};


export type Feature = {
  bbox: Array<number>;
  center: Array<number>;
  context: Context[];
  geometry: Geometry;
  id: string;
  place_name: string;
  place_type: string[];
  properties: Properties;
  relevance: number;
  text: string;
  type: "Feature";
};

export type GeocodingResponseBody = {
  attribution: string;
  features: Feature[];
  query: string[];
  type: string;
}