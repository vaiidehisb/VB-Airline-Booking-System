const {City} = require(`../models`);

class CityRepository {
    async createCity ({ name }) {
          try{
            const city = await City.create({name});
            return City;
          } catch(error){
                 console.log("Something went wrong in the repository layer");
                 throw{error};
          }
    }

    async deleteCity ({cityId}){
        try {
            await City.destroy({
                 where: {
                    id: cityId,
                 }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await City.updateCity(data, {
                where: {
                    id: cityId
                }
            });
            return City;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async getCity(cityId) {
        try{
            const city = await City.findOne();
            return City;

        } catch(error){
            console.log("Something went wrong in the repository layer");
        }
    }
}

module.exports = CityRepository;