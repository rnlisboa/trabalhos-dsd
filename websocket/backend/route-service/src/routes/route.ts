import { Request, Response, Router } from 'express'

const router = Router();

let initial = 0;

const token = 'pk.eyJ1IjoicmVuYW5saXNib2EiLCJhIjoiY2x5ZWJndm11MDBzZDJtcHc5cmt5eGk5NyJ9.vVttItTEnoh1r1n9NCYwcg';
function getRoute(req: Request, resp: Response) {
    const { latO, longO, latD, longD } = req.body;
    if (latO && latD) {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${longO},${latO};${longD},${latD}?geometries=geojson&access_token=${token}`).then(
            result => {
                console.log(result)
            }
        )
    }
    return resp.status(200).json({ message: '' });
}

router.get('/get-route', getRoute)

export { router };