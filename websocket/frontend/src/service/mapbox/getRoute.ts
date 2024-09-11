
import { Coordinates } from "../../dtos/Map";
import { directionsClient } from "./config";

const getRoute = async (coordOrigem: Coordinates, coordDestino: Coordinates) => {
    try {
      if (coordOrigem && coordDestino) {

        const response = await directionsClient.getDirections({
          profile: 'driving',
          geometries: 'geojson',
          waypoints: [
            { coordinates: [coordOrigem.longitude, coordOrigem.latitude] },
            { coordinates: [coordDestino.longitude, coordDestino.latitude] }
          ]
        }).send();
        return response.body.routes[0].geometry
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };

export default getRoute;