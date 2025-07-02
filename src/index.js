const express = require('express');

const {PORT} = require('./config/serverConfig');

const SetupAndStartServer = async () => {

    //create express object
    const app = express();

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    });
}

SetupAndStartServer();