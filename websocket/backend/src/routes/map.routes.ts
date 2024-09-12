import { Request, Response, Router } from 'express'

const router = Router();

let initial = 0;

const coordinates = [
    [-35.223204, -5.811374],
    [-35.223309, -5.811687],
    [-35.223105, -5.811995],
    [-35.223208, -5.812235],
    [-35.225957, -5.811236],
    [-35.224946, -5.808496],
    [-35.2071, -5.815047],
    [-35.205985, -5.815336],
    [-35.204044, -5.810092],
    [-35.202569, -5.810675]
  ];
  

function sendResponse(req: Request, resp: Response){
    console.log('bateu aqui');
    return resp.status(200).json({message: coordinates[initial++]});
}

router.get('/current-location', sendResponse)

export { router };