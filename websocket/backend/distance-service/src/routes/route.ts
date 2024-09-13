import { Request, Response, Router } from 'express'

const router = Router();

let initial = 0;


function getDistance(req: Request, resp: Response){
    console.log('bateu aqui');
    return resp.status(200).json({message: ''});
}

router.get('/', getDistance)

export { router };