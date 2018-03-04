"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var port = process.env.PORT || 4000;
app_1.default.listen(port, function () { return console.log("Listening on port " + port); });
//# sourceMappingURL=index.js.map