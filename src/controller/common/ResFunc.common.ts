import { Response } from "express";

interface IResFunc {
  res: Response;
  data?: any;
  err?: any;
}

export const resFunc = ({ res, data, err }: IResFunc) => {
  let status = 200;
  let success = true;

  if (err) {
    status = err.status || 500;
    success = false;

    return res.status(status).json({ success, err });
  }

  return res.status(status).json({ success, data });
};
