const {City} = require(`../models`);

class CityRepository {
    async createCity ({ name }) {
          try{
            const city = await City.create({name});
            return city;
          } catch(error){
                 throw{error};
          }
    }

    async deleteCity ({name}){
        try {
            await City.destroy({
                 where: {
                    id: cityId,
                 }
            });
        }
        catch(error){
            throw{error};
        }
    }
}

module.exports = CityRepository;