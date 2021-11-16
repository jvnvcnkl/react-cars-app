import axios from 'axios';

class CarsService {

    constructor() {
        this.httpClient = axios.create({
            baseURL: 'http://localhost:3000'

        });
    }


    async getAll() {
        try {
            const { data } = await this.httpClient.get('/api/cars');

            return data;
        } catch (error) {
            console.log('error', error);
        }

        return null;
    }

    async add(car) {
        console.log(car)
        try {
            const { data } = await this.httpClient.post('api/cars', car);
            console.log(data)
            return data;
        } catch (error) {
            console.log('error', error);
        }

        return null;


    }
}

export default new CarsService