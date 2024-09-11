import directions from '@mapbox/mapbox-sdk/services/directions';
import geocoding from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxSdk from '@mapbox/mapbox-sdk';

export const TOKEN: string = 'pk.eyJ1IjoicmVuYW5saXNib2EiLCJhIjoiY2x5ZWJndm11MDBzZDJtcHc5cmt5eGk5NyJ9.vVttItTEnoh1r1n9NCYwcg'

export const MapboxClient = mapboxSdk({ accessToken: TOKEN });
export const directionsClient = directions(MapboxClient);
export const geocodingClient = geocoding(MapboxClient);