import express from "express";

const router = express.Router();
const controller = require("../controllers/UserController");

router.get("/user", controller.index);
router.get("/user/:id", controller.getById);
router.post("/user", controller.store);
router.put("/user/:id", controller.updateById);
router.patch("/user/:id", controller.updateById);
router.delete("/user/:id", controller.deleteById);

module.exports = router;
