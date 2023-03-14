import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.LocationsCtrl.findAll);
router.get("/:id", indexCtrl.LocationsCtrl.findOne);
router.post("/", indexCtrl.LocationsCtrl.create);
router.put("/:id", indexCtrl.LocationsCtrl.update);
router.delete("/:id", indexCtrl.LocationsCtrl.deleted);

router.get("/sql/:id", indexCtrl.LocationsCtrl.querySQL);

export default router;
