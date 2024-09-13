import { Request, Response, Router } from 'express'

const router = Router();

let initial = 0;


function getDistance(req: Request, resp: Response) {
    const { latO, longO, latD, longD } = req.query;
    if(latO && longO && latD && longD){

        const distancia = calcularDistancia(Number(latO), Number(longO), Number(latD), Number(longD));
        return resp.status(200).json({ distancia });
    }

    return resp.status(400).json({ message: 'Parametros inválidos' });

}

router.get('/', getDistance)

export { router };


function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): string {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanciaKm = R * c;

    const distanciaMetros = distanciaKm * 1000;

    if (distanciaMetros >= 1000) {
        return `${distanciaKm.toFixed(1)} km`;
    } else {
        return `${Math.round(distanciaMetros)} m`;
    }
}