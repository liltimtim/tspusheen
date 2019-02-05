"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
app_1.default.listen(config_1.Config.PORT, () => {
    console.log("Express server listening on part " + config_1.Config.PORT);
});
//# sourceMappingURL=server.js.map