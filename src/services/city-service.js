const { response } = require("express");
const { CityRepository } = require(`../repository/index`);

class CityServices{

    constructor() {
        this.CityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }



    async updateCity(cityId){
        try {
            const city = await this.CityRepository.updateCity(cityId);
            return city;
            
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
            
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

}

module.exports = CityServices;