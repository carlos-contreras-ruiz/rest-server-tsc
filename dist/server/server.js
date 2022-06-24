"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.paths = {
            usuarios: "/api/v1/usuarios",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.paths.usuarios, user_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo !");
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map