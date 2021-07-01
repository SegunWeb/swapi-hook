export default class apiService {

    _baseApi = 'https://swapi.dev/api';

    async getUrl(url) {
        const res = await fetch(`${this._baseApi}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }
        const data = res.json();
        return data
    }

    async getAllPeople() {
        const res = await this.getUrl(`/people/`);
        return res.results
    }
    getPeople(id){ return this.getUrl(`/people/${id}`)};

    async getAllPlanets() {
        const res = await this.getUrl(`/planets/`);
        return res.results
    }
    getPlanet(id){ return this.getUrl(`/planets/${id}`)};

    async getAllStarships() {
        const res = await this.getUrl(`/starships/`);
        return res.results
    }
    getStarship(id){ return this.getUrl(`/starships/${id}`)};


}