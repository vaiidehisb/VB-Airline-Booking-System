const express = require("express");
const bodyParser = require('body-parser');
const {City} = require(`./models/city`);
const {PORT} = require('./config/serverConfig');
const CityRepository = require(`./repository/city-repository`);


const SetupAndStartServer = async () => {

    //create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async() => {
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        try {
            await repo.createCity({name: "New Delhi"});
        } catch (error) {
            console.error("Error creating city:", error);
        }
    });
}

SetupAndStartServer();