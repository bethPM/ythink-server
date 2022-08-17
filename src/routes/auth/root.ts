import { Router } from "express";
import kakaoRoute from "./kakao.route";

const router = Router();

router.use("/kakao", kakaoRoute);

export default router;
