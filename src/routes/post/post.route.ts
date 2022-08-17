import { Router } from "express";

import controller from "../../controller/post/post.controllert";
import { authChecker } from "../../middleware/auth";

const router = Router();

router.get("/readPosts", authChecker, controller.readPosts);

router.get("/readPost/:id", authChecker, controller.readPost);

router.post("/createPost", authChecker, controller.createPost);

router.post("/updatePost", authChecker, controller.updatePost);

router.post("/deletePost", authChecker, controller.deletePost);

export default router;
