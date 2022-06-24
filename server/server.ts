import express, { Application } from "express";
import userRouter from "../routes/user";
import cors from "cors";

export default class Server {
  private app: Application;
  private port: string;
  private paths = {
    usuarios: "/api/v1/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.usuarios, userRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo !");
    });
  }
}
