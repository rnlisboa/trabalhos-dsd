# Documentação da API

Esta API fornece serviços para recuperar rotas e calcular distâncias entre coordenadas geográficas.

## URL Base

Todos os endpoints da API são baseados na seguinte URL base:


## Endpoints

### 1. Obter Rota

Recupera uma rota entre duas coordenadas geográficas.

- **URL:** `/get-route`
- **Método:** `GET`
- **Parâmetros de Consulta (Query Parameters):**
  - `latO` (Number) - Latitude da origem.
  - `longO` (Number) - Longitude da origem.
  - `latD` (Number) - Latitude do destino.
  - `longD` (Number) - Longitude do destino.
- **Resposta:**
  - Retorna um `AxiosPromise` com os dados da rota.

#### Exemplo de Requisição

```
http
GET http://localhost:3080/api/get-route?latO=40.73061&longO=-73.935242&latD=34.052235&longD=-118.243683
```


### 2. Obter Distancia

Recupera uma rota entre duas coordenadas geográficas.

- **URL:** `/get-distance`
- **Método:** `GET`
- **Parâmetros de Consulta (Query Parameters):**
  - `latO` (Number) - Latitude da origem.
  - `longO` (Number) - Longitude da origem.
  - `latD` (Number) - Latitude do destino.
  - `longD` (Number) - Longitude do destino.
- **Resposta:**
  - Retorna um `AxiosPromise` com os dados da distancia.

#### Exemplo de Requisição

```http
GET http://localhost:3080/api/get-distance?latO=40.73061&longO=-73.935242&latD=34.052235&longD=-118.243683
```