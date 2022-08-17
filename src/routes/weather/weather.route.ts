import { Router } from "express";
import { authChecker } from "../../middleware/auth";
import controller from "../../controller/weather/weather.controller";

const router = Router();

router.get("/getWeatherInfo", authChecker, controller.getWeatherInfo);

export default router;
