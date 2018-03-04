"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status-codes");
var express = require("express");
var path = require("path");
var app = express();
app.get('/api', function (req, res) {
    /**
     * An example of handling query parameters and bad requests:
     */
    // const { filterString } = req.query;
    // if (!filterString) {
    //   res.statusMessage = `Must provide a filterString query parameter.`;
    //   res.sendStatus(HttpStatus.BAD_REQUEST);
    //   return;
    // }
    res.sendStatus(HttpStatus.OK);
    res.json({
        data: []
    });
});
/**
 * These endpoints are used for deploying the Heroku app, which serves
 * both the server and client. Testing the client locally should be done
 * with the CRA server, which proxies requests to this server for /api, but serves
 * the content separately for HMR.
 */
app.use('/static', express.static(path.join(__dirname + "/build/static")));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + "/build/index.html"));
});
exports.default = app;
//# sourceMappingURL=app.js.map