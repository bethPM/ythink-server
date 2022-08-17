import { Request, Response } from "express";
import {
  postCreate,
  postDelete,
  postRead,
  postsRead,
  postUpdate,
} from "../../models/Post";
import { resFunc } from "../common/ResFunc.common";

export default {
  readPosts: async (req: Request, res: Response) => {
    try {
      const posts = await postsRead(req.user.email);

      resFunc({ res, data: posts });
    } catch (err: any) {
      console.log("post readPosts Error", err);

      resFunc({ res, err });
    }
  },
  readPost: async (req: Request, res: Response) => {
    try {
      const _id = req.originalUrl.split("/readPost/")[1];

      const post = await postRead(_id);

      resFunc({ res, data: post });
    } catch (err) {
      console.log("post createPost Error", err);
      resFunc({ res, err });
    }
  },
  createPost: async (req: Request, res: Response) => {
    try {
      const post = req.body;

      await postCreate(post);

      resFunc({ res });
    } catch (err: any) {
      console.log("post createPost Error", err);

      resFunc({ res, err });
    }
  },
  updatePost: async (req: Request, res: Response) => {
    try {
      const _id = req.query._id as string;
      const post = req.body;

      console.log(_id);
      console.log(post);

      await postUpdate(_id, post);

      resFunc({ res });
    } catch (err: any) {
      console.log("post updatePost Error", err);

      resFunc({ res, err });
    }
  },
  deletePost: async (req: Request, res: Response) => {
    try {
      const _id = req.query._id as string;

      const posts = await postDelete(_id);

      resFunc({ res, data: posts });
    } catch (err: any) {
      console.log("post deletePost Error", err);

      resFunc({ res, err });
    }
  },
};
