import { Coordinates } from "../dtos/Map";

function decodePolyline(encoded: string): Coordinates[] {
    const poly: Coordinates[] = [];
    let index = 0;
    const len = encoded.length;
    let lat = 0;
    let lng = 0;
  
    while (index < len) {
      let b: number, shift = 0, result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = (result & 1) !== 0 ? ~(result >> 1) : (result >> 1);
      lat += dlat;
  
      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = (result & 1) !== 0 ? ~(result >> 1) : (result >> 1);
      lng += dlng;
  
      const ponto: Coordinates = {
        latitude: lat / 1e5,
        longitude: lng / 1e5
      };
      poly.push(ponto);
    }
    return poly;
  }