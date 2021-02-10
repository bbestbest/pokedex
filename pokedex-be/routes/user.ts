import express from "express";

const router = express.Router();
const userValidator = require("../middlewares/validators/userValidator");
const controller = require("../controllers/UserController");

router.get("/user", controller.index);
router.get("/user/:id", controller.getById);
router.post("/login", userValidator.validateUser, controller.login);
router.post("/user", userValidator.validateUser, controller.store);
router.put("/user/:id", controller.updateById);
router.patch("/user/:id", controller.updateById);
router.delete("/user/:id", controller.deleteById);

module.exports = router;
