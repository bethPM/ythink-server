import { Router } from "express";

import controller from "../../controller/youtube/youtube.controller";

const router = Router();

router.get("/getOgTag", controller.getOgTag);

export default router;
