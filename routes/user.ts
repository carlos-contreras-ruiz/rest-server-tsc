import { Router } from "express";
import {
  createUsuario,
  getUsuario,
  getUsuarios,
} from "../controllers/usuarios";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", createUsuario);

export default router;
