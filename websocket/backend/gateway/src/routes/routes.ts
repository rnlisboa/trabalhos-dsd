import { Request, Response, Router } from 'express'

const router = Router();


function getRoute(req: Request, resp: Response) {
    const { latO, longO, latD, longD } = req.query;
    try {
        fetch(`http://localhost:3082/routes?latO=${latO}&longO=${longO}&latD=${latD}&longD=${longD}`)
            .then(result => result.json())  // Adicionar tratamento de JSON aqui também
            .then(data => {
                return resp.status(200).json({ result: data });
            })
            .catch(err => {
                return resp.status(500).json({ error: 'Erro ao conectar ao serviço de rotas.' });
            });
    } catch (e) {
        return resp.status(400).json({ message: 'Parametros inválidos.' });
    }
}


function getDistance(req: Request, resp: Response) {
    const { latO, longO, latD, longD } = req.query;
    console.log(latO, longO, latD, longD)
    // Verifica se os parâmetros estão presentes
    if (!latO || !longO || !latD || !longD) {
        return resp.status(400).json({ message: 'Parâmetros ausentes. Certifique-se de fornecer latO, longO, latD e longD.' });
    }

    // Faz a requisição para o serviço de cálculo de distância
    fetch(`http://localhost:3081/distance?latO=${latO}&longO=${longO}&latD=${latD}&longD=${longD}`)
        .then(result => {
            if (!result.ok) {
                throw new Error(`Erro na requisição: ${result.status} - ${result.statusText}`);
            }
            return result.json();  // Converte a resposta para JSON
        })
        .then(data => {
            return resp.status(200).json({ result: data });  // Envia a resposta ao cliente
        })
        .catch(error => {
            console.error('Erro ao se comunicar com o serviço de rotas:', error.message);
            return resp.status(500).json({ message: 'Erro ao buscar distância. Verifique se o serviço de rotas está rodando.' });
        });
}


router.get('/get-route', getRoute)
router.get('/get-distance', getDistance)

export { router };