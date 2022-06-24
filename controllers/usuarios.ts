import { Response, Request } from "express";

export const getUsuarios = (req: Request, res: Response) => {
  res.json({
    msg: "getUsuarios",
  });
};

export const getUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "getUsuario",
    id,
  });
};

export const createUsuario = (req: Request, res: Response) => {
  const { body } = req;
  console.log("Body", body);
  res.json({
    msg: "createUsuario",
    body,
  });
};
