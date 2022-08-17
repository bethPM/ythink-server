import { Router } from "express";

import controller from "../../controller/auth/kakao.controller";
import { authChecker } from "../../middleware/auth";

const router = Router();

router.post("/signIn", controller.signIn);

router.get("/checkToken", authChecker, controller.checkToken);

router.get("/myInfo", authChecker, controller.myInfo);

router.post("/reissueToken", authChecker, controller.reissueToken);

router.post("/logout", authChecker, controller.logout);

export default router;
