import { Request, Response, Router } from 'express'

const router = Router();


function getRoute(req: Request, resp: Response){
    const { latO, longO, latD, longD } = req.body;
    fetch(`http://localhost:3082/routes?latO=${latO}&longO=${longO}&latD=${latD}&longD=${longD}`)
    return resp.status(200).json({message: ''});
}

router.get('/get-route', getRoute)

export { router };