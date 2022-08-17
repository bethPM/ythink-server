import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import * as cheerio from "cheerio";
import { resFunc } from "../common/ResFunc.common";

export default {
  getOgTag: async (req: Request, res: Response) => {
    const appendValue: any = {};

    const v = req.query.v as string;

    const target = ["og:url", "og:image", "og:description", "og:video:url"];

    const data: AxiosResponse<string> = await axios.get(
      `https://www.youtube.com/watch?v=${v}`
    );

    const $ = cheerio.load(data.data);

    $("meta").map((m, e) => {
      e.attributes.map((a, i) => {
        if (
          a.value === "og:url" ||
          a.value === "og:image" ||
          a.value === "og:description" ||
          a.value === "og:video:url"
        ) {
          appendValue[a.value] = e.attribs.content;
        }
      });
    });
    resFunc({ res, data: appendValue });
  },
};
