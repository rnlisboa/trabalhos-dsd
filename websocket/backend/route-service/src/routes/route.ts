import { Request, Response, Router } from 'express'

const router = Router();

const token = 'pk.eyJ1IjoicmVuYW5saXNib2EiLCJhIjoiY2x5ZWJndm11MDBzZDJtcHc5cmt5eGk5NyJ9.vVttItTEnoh1r1n9NCYwcg';
function getRoute(req: Request, resp: Response) {
    const { latO, longO, latD, longD } = req.query;
    if (latO && longO && latD && longD) {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${longO},${latO};${longD},${latD}?geometries=geojson&access_token=${token}`)
            .then(result => result.json())  // Certifique-se de converter a resposta para JSON
            .then(data => {
                return resp.status(200).json({ rota: data });
            })
            .catch(err => {
                return resp.status(500).json({ error: 'Erro ao buscar rota.' });
            });
    } else {
        return resp.status(400).json({ message: 'Parametros inválidos.' });
    }
}


router.get('/', getRoute)

export { router };