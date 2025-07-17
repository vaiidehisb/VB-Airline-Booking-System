const express = require("express");
const bodyParser = require(bodyParser);

const {PORT} = require('./config/serverConfig');

const SetupAndStartServer = async () => {

    //create express object
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    });
}

SetupAndStartServer();