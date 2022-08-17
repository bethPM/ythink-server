import { Request, Response } from "express";
import { loadWeahterInfo } from "../../API/weather";
import { resFunc } from "../common/ResFunc.common";

export default {
  getWeatherInfo: async (req: Request, res: Response) => {
    try {
      const lat = req.query.lat as string;
      const lon = req.query.lon as string;

      const { data } = await loadWeahterInfo(lat, lon);

      return resFunc({ res, data });
    } catch (err) {
      console.log("err getWeatherInfo", err);

      return resFunc({ res, err });
    }
  },
};
