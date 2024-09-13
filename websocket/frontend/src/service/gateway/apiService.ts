import axios, { AxiosPromise } from "axios";

export default class ApiService{
    private url: string;
    constructor(){
        this.url = 'http://localhost:3080/api'
    }

    public async getRoute(latO: Number, longO: Number, latD: Number, longD: Number): AxiosPromise<any>{
        return axios.get(`${this.url}/get-route`, {
            params: {
                latO,
                longO,
                latD,
                longD
            }
        })
    }

    public async getDistance(latO: Number, longO: Number, latD: Number, longD: Number): AxiosPromise<any>{
        return axios.get(`${this.url}/get-distance`, {
            params: {
                latO,
                longO,
                latD,
                longD
            }
        })
    }
}